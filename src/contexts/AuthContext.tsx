import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { userAPI } from '../services/api';

interface User {
  _id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  register: (fullName: string, email: string, phone: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('REChain_token'));
  const [isLoading, setIsLoading] = useState(true);

  // On mount, check if token exists and is valid
  useEffect(() => {
    const storedToken = localStorage.getItem('REChain_token');
    const storedUser = localStorage.getItem('REChain_user');
    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('REChain_token');
        localStorage.removeItem('REChain_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string, rememberMe: boolean = false) => {
    const { data } = await userAPI.login({ email, password, rememberMe });
    if (data.success && data.token) {
      localStorage.setItem('REChain_token', data.token);
      localStorage.setItem('REChain_user', JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
    } else {
      throw new Error(data.message || 'Login failed');
    }
  }, []);

  const register = useCallback(async (fullName: string, email: string, phone: string, password: string) => {
    const { data } = await userAPI.register({ fullName, email, phone, password });
    if (data.success && data.token) {
      localStorage.setItem('REChain_token', data.token);
      localStorage.setItem('REChain_user', JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
    } else {
      throw new Error(data.message || 'Registration failed');
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('REChain_token');
    localStorage.removeItem('REChain_user');
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
