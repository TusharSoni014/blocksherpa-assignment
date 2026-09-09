import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader: React.FC = () => {
  return (
    <Link to="/" className="flex items-center justify-center gap-3 mb-8">
      <div className="bg-[#D4755B] rounded-lg w-10 h-10 flex items-center justify-center">
        <span className="material-icons text-white text-2xl">apartment</span>
      </div>
      <span className="font-fraunces text-3xl font-bold text-[#111827]">REChain</span>
    </Link>
  );
};

export default AuthHeader;