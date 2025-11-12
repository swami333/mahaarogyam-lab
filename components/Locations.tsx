
import React from 'react';

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Locations: React.FC = () => {
    return (
        <section id="contact" className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Locations & Contact</h2>
                    <p className="mt-4 text-lg text-gray-600">Find us at our main lab or a collection center near you.</p>
                     <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Main Processing Lab and Shikrapur Branch </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-lg text-orange-700">Shikrapur (Main Lab)</h4>
                                <p className="text-gray-600">Above Swami Samarth Hospital,Behind Mangalmurti  Medical, Opp to SBI Bank, Pabal Road, Shikrapur, Tal.Shirur,Dist.Pune-412208.<br/><strong>Tel.</strong>9860 132 901, 9860 132 902</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-orange-700">Pabal Branch</h4>
                                <p className="text-gray-600">Loni Road, Nageshwar Chowk, A/p Pabal,Tal.Shirur,Dist.Pune-412 403.<br/>
                                <strong>Tel.</strong>9860 135 180, 9860 135 189</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Collection Centers</h3>
                         <div className="grid grid-cols-2 gap-4 text-gray-600">
                             <p className="flex items-center"><LocationIcon /> Pabal</p>
                             <p className="flex items-center"><LocationIcon /> Loni (Dhamni)</p>
                             <p className="flex items-center"><LocationIcon /> Chakan</p>
                             <p className="flex items-center"><LocationIcon /> Pimpri-Chinchwad</p>
                             <p className="flex items-center"><LocationIcon />Pargaon</p>
                         </div>
                         <div className="mt-6 border-t pt-6">
                             <h4 className="text-xl font-bold mb-4 text-gray-800">Get in Touch</h4>
                             <p className="flex items-center text-lg">
                                 <PhoneIcon /> 
                                 <span className="font-semibold">Call: <a href="tel:9860132901" className="text-orange-600 hover:underline">9860 132 901</a> / <a href="tel:9860132902" className="text-orange-600 hover:underline">9860 132 902</a></span>
                             </p>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;

