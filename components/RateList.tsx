import React, { useState, useEffect } from 'react';
import { RATE_LIST } from '../rateList';
import type { Test } from '../types';

const RateList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTests, setFilteredTests] = useState<Test[]>(RATE_LIST);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = RATE_LIST.filter(item =>
      item.name.toLowerCase().includes(lowercasedFilter) ||
      item.code.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredTests(filteredData);
  }, [searchTerm]);

  return (
    <section id="ratelist" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Test Directory & Rate List
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Search our comprehensive list of available tests.
          </p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        
        <div className="mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a test by name or code..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Search tests"
          />
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                    <thead className="bg-gray-100 border-b-2 border-gray-200">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Test Name</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Code</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Amount (₹)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredTests.length > 0 ? (
                            filteredTests.map((test, index) => (
                                <tr key={`${test.code}-${index}`} className="hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-800">{test.name}</td>
                                    <td className="p-4 text-gray-600">{test.code}</td>
                                    <td className="p-4 text-gray-800 font-semibold text-right">{test.amount.toLocaleString('en-IN')}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center p-8 text-gray-500">
                                    No tests found matching your search.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RateList;
