
import React from 'react';
import type { JobOpening } from '../types';

const jobOpenings: JobOpening[] = [
  { srNo: 1, post: 'Receptionist (Female)', qualification: 'Graduate, Any Faculty, good Typing speed, communication skill speak in Marathi, Hindi, English.', experience: '2 Years experience / Fresher may be apply.' },
  { srNo: 2, post: 'Accountant (Male/Female)', qualification: 'B.Com/M.Com', experience: '2 Years experience / Fresher may be apply.' },
  { srNo: 3, post: 'Marketing Excutive (Male/Female)', qualification: 'MBA/BBA', experience: '2 Years experience / Fresher may be apply.' },
  { srNo: 4, post: 'PRO (Male/Female)', qualification: 'PG MSW', experience: '2 Years experience / Fresher may be apply.' },
  { srNo: 5, post: 'Phlebotomist (Blood sample Collection boy) Male', qualification: '12th Science', experience: '2 Years experience / Fresher may be apply.' },
  { srNo: 6, post: 'jr.Lab Technician', qualification: '12th Sci./Bsc.DMLT', experience: '2 Years experience / Fresher may be apply.' },
  { srNo: 7, post: 'Sr.Lab Technician', qualification: 'PGDMLT/ADMLT/BMLT', experience: '2 Years experience / Fresher may be apply.' },
  { srNo: 8, post: 'Pathologists', qualification: 'MBBS DCP/MD(PATH)', experience: '2 Years experience / Fresher may be apply.' },
];

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Join Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are looking for talented individuals to join our growing healthcare family.
          </p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Sr.No</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Post</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Qualification</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {jobOpenings.map((job) => (
                  <tr key={job.srNo} className="hover:bg-gray-50">
                    <td className="p-4 text-gray-600">{job.srNo}</td>
                    <td className="p-4 font-medium text-gray-800">{job.post}</td>
                    <td className="p-4 text-gray-600">{job.qualification}</td>
                    <td className="p-4 text-gray-600">{job.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-xl text-gray-800 mb-2">Important Note for Applicants</h3>
            <p className="text-gray-700">
                Interested candidates should submit their application (Resume) from <strong>date 31 Oct. 2025 to 2 Nov. 2025</strong> between <strong>10:00 AM to 5:00 PM</strong>.
            </p>
            <p className="text-gray-700 mt-2">
                <strong>Location:</strong> AT MAHA AAROGYAM HEALTHCARE SPECIALITY LABORATORY, Above Swami Samartha Hospital, Behind Mangalmurti Medical, Opp. to SBI Bank, Pabal Road, Shikrapur Tal- Shirur, Dist- Pune. 412208.
            </p>
            <p className="text-gray-700 mt-4">
                For any queries, please email us at: <a href="mailto:mahaarogyam@gmail.com" className="font-semibold text-orange-600 hover:underline">mahaarogyam@gmail.com</a>
            </p>
        </div>

      </div>
    </section>
  );
};

export default Careers;
