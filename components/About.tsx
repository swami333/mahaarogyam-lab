
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Maha Aarogyam
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our Journey in Providing Quality Healthcare
          </p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Maha - Aarogyam</strong> started on 24th March 2000, at Pabal. In the year 2000, in a rural area like Pabal, the Primary health center had the facility to test only malaria. We started the facility of testing blood and Urine which proved immensely beneficial for patients and medical professionals.
            </p>
            <p>
              We were the first in a rural area like Pabal to automate our testing facility with the addition of a Cell Counting machine. The Cell Counter increased the speed and accuracy of our test results. This reliability resulted in the growth of our business.
            </p>
            <p>
              Until 2019, we had to outsource some critical tests, which caused delays and increased costs for patients. Now, <strong>Maha - Aarogyam</strong> has set up a state-of-the-art lab at <strong>Shikrapur</strong> where all tests will be conducted under one roof with the latest machines.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
                {/* <img src="https://picsum.photos/seed/lab1/400/300" alt="Maha-Aarogyam Reception" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                <img src="https://picsum.photos/seed/lab2/400/300" alt="Maha-Aarogyam Waiting area" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                <img src="https://picsum.photos/seed/lab3/800/300" alt="Director Shri Somnath Khedekar" className="rounded-lg shadow-lg col-span-2 w-full h-full object-cover"/> */}
                <img src="/img1.jpg" alt="" className='ml-40'  />
            </div>
             <p className="text-center ml-6 mt-4 font-semibold text-gray-700">Shri Somnath Khedekar, Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
