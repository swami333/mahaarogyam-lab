
import React from 'react';
import { LAB_MACHINES } from '../constants';
import type { LabMachine } from '../types';

const MachineCard: React.FC<{machine: LabMachine}> = ({ machine }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow hover:shadow-xl">
        <img src={machine.imageUrl} alt={machine.name} className="w-full h-48 object-cover" />
        <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-800">{machine.name}</h3>
            <p className="text-orange-600 font-semibold">{machine.type}</p>
            <p className="text-sm text-gray-500 mb-2">Tests/Hour: {machine.testsPerHour}</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside flex-grow">
                {machine.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    </div>
);


const Technology: React.FC = () => {
    const mainMachine = LAB_MACHINES.find(m => m.name === 'Centaur-XP');
    const otherMachines = LAB_MACHINES.filter(m => m.name !== 'Centaur-XP');

  return (
    <section id="technology" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our State-of-the-Art Technology
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Over 250 different tests are performed using ultra-modern machines.
          </p>
           <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>

        {mainMachine && (
             <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden mb-12 grid md:grid-cols-2 items-center">
                <img src={mainMachine.imageUrl} alt={mainMachine.name} className="w-full h-full object-cover" />
                <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-800">{mainMachine.name}</h3>
                    <p className="text-xl text-orange-600 font-semibold mt-1">{mainMachine.type}</p>
                    <p className="text-lg text-gray-700 mt-2">Throughput: <strong>{mainMachine.testsPerHour}</strong></p>
                    <div className="border-t my-4"></div>
                    <p className="font-semibold text-gray-800 mb-2">Performs a wide range of tests including:</p>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        {mainMachine.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {otherMachines.map((machine, index) => (
            <MachineCard key={index} machine={machine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
