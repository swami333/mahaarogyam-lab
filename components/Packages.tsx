import React from 'react';
import { HEALTH_PACKAGES } from '../constants';
import PackageCard from './PackageCard';
import type { HealthPackage } from '../types';

interface PackagesProps {
    onBookNow: (healthPackage: HealthPackage) => void;
}

const Packages: React.FC<PackagesProps> = ({ onBookNow }) => {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Health Check-Up Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a package that's right for you.
          </p>
           <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HEALTH_PACKAGES.map((pkg, index) => (
            <PackageCard key={index} healthPackage={pkg} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;