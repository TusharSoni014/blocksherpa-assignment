import React from 'react';

interface PropertyHeaderProps {
  status?: 'available' | 'sold' | 'pending';
  refNumber?: string;
  name?: string;
  location?: string;
  price?: string;
  beds?: number;
  baths?: number;
  sqm?: number;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  status = 'available',
  refNumber = '#AHM-SKT-402',
  name = 'Skyline Towers: 4T Apartment in Ahmedabad',
  location = 'Satellite, Gandhingar Highway, Ahmedabad',
  price = '75,00,000',
  beds = 4,
  baths = 4,
  sqm = 1200
}) => {
  const statusConfig = {
    available: {
      bg: 'bg-[#E0E8E3]',
      dotColor: 'bg-[#22C55E]',
      textColor: 'text-[#4A6356]',
      label: 'Available'
    },
    sold: {
      bg: 'bg-[#FEE2E2]',
      dotColor: 'bg-[#EF4444]',
      textColor: 'text-[#991B1B]',
      label: 'Sold'
    },
    pending: {
      bg: 'bg-[#FEF3C7]',
      dotColor: 'bg-[#F59E0B]',
      textColor: 'text-[#92400E]',
      label: 'Pending'
    }
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="bg-white border-b border-[rgba(229,224,216,0.6)]">
      <div className="max-w-[1280px] mx-auto px-8 py-8">
        <div className="flex items-start justify-between gap-8">
          {/* Left - Property Info */}
          <div className="flex-1">
            {/* Status Badge & Ref Number */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`${currentStatus.bg} rounded-full px-4 py-1 flex items-center gap-2`}>
                <div className={`${currentStatus.dotColor} w-2 h-2 rounded-full`} />
                <span className={`font-manrope font-extralight text-xs ${currentStatus.textColor} uppercase tracking-wider`}>
                  {currentStatus.label}
                </span>
              </div>
              <span className="font-manrope font-extralight text-sm text-[#64748B]">
                Ref: {refNumber}
              </span>
            </div>

            {/* Property Name */}
            <h1 className="font-manrope font-extralight text-4xl text-[#0F172A] leading-tight tracking-tight mb-3">
              {name}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-[#64748B]">
              <span className="material-icons text-lg">
                location_on
              </span>
              <span className="font-manrope font-extralight text-sm">
                {location}
              </span>
            </div>
          </div>

          {/* Right - Price */}
          <div className="text-right">
            <p className="font-manrope font-extralight text-sm text-[#64748B] mb-2 uppercase tracking-wider">
              Listed Price
            </p>
            <div className="flex items-baseline gap-1">
              <span className="font-space-mono font-bold text-xl text-[#D4755B]">
                $
              </span>
              <span className="font-space-mono font-bold text-4xl text-[#D4755B]">
                {price}
              </span>
            </div>
          </div>
        </div>

        {/* Key Specs */}
        <div className="flex items-center gap-12 mt-8 pt-8 border-t border-[rgba(229,224,216,0.6)]">
          {/* Bedrooms */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-[rgba(212,117,91,0.1)] rounded-lg flex items-center justify-center">
              <span className="material-icons text-2xl text-[#D4755B]">
                bed
              </span>
            </div>
            <div className="text-center">
              <p className="font-space-mono font-bold text-2xl text-[#0F172A] mb-0.5">
                {beds}
              </p>
              <p className="font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider">
                Bedrooms
              </p>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-[rgba(212,117,91,0.1)] rounded-lg flex items-center justify-center">
              <span className="material-icons text-2xl text-[#D4755B]">
                bathtub
              </span>
            </div>
            <div className="text-center">
              <p className="font-space-mono font-bold text-2xl text-[#0F172A] mb-0.5">
                {baths}
              </p>
              <p className="font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider">
                Bathrooms
              </p>
            </div>
          </div>

          {/* Square Feet */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-[rgba(212,117,91,0.1)] rounded-lg flex items-center justify-center">
              <span className="material-icons text-2xl text-[#D4755B]">
                square_foot
              </span>
            </div>
            <div className="text-center">
              <p className="font-space-mono font-bold text-2xl text-[#0F172A] mb-0.5">
                {sqm.toLocaleString()}
              </p>
              <p className="font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider">
                Sq Ft
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;