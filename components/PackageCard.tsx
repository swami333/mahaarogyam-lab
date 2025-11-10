import React from 'react';
import type { HealthPackage } from '../types';

interface PackageCardProps {
  healthPackage: HealthPackage;
  onBookNow: (healthPackage: HealthPackage) => void;
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PackageCard: React.FC<PackageCardProps> = ({ healthPackage, onBookNow }) => {
  const { name, totalTests, categories, isFeatured, price, discountedPrice } = healthPackage;

  const cardClasses = `
    bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col h-full relative
    ${isFeatured ? 'border-4 border-orange-500' : 'border border-gray-200'}
  `;

  return (
    <div className={cardClasses}>
      {isFeatured && (
        <div className="absolute top-0 right-0 -mt-4 mr-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          Popular
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{totalTests} Tests</p>
         <div className="flex items-baseline mb-4">
          <span className="text-3xl font-extrabold text-orange-600 mr-2">₹{discountedPrice}</span>
          {price > discountedPrice && <span className="text-lg text-gray-500 line-through">₹{price}</span>}
        </div>
        <div className="border-t border-gray-200 my-4"></div>
        <ul className="space-y-3 text-gray-600">
          {categories.map((category, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span>
                <span className="font-semibold">{category.name}:</span> {category.details}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button 
          onClick={() => onBookNow(healthPackage)} 
          className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Pay & Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageCard;