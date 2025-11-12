
// import React from 'react';

// const Footer: React.FC = () => {

//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     document.querySelector(href)?.scrollIntoView({
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">MAHA AAROGYAM</h3>
//             <p className="text-gray-400">
//               Your trusted partner in healthcare and diagnostics. Providing accurate and timely results with state-of-the-art technology.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-400 hover:text-white">About Us</a></li>
//               <li><a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="text-gray-400 hover:text-white">Health Packages</a></li>
//               <li><a href="#technology" onClick={(e) => handleNavClick(e, '#technology')} className="text-gray-400 hover:text-white">Our Technology</a></li>
//               <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-400 hover:text-white">Locations</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li className="flex items-start">
//                 <span className="mr-2 mt-1">📍</span>
//                 <span>Shikrapur, Maltan Phata, Pune-Nagar Highway, Pune - 412 208</span>
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2">📞</span>
//                 <a href="tel:9860132901" className="hover:text-white">9860 132 901</a> / <a href="tel:9860132902" className="hover:text-white">902</a>
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2">📧</span>
//                 <a href="mailto:info@mahaarogyam.com" className="hover:text-white">mahaaarogyam@gmail.com</a>
//               </li>
//                <li className="flex items-center">
//                 <span className="mr-2">🌐</span>
//                 <a href="https://mahaarogyam-lab.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white">https://mahaarogyam-lab.vercel.app/</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
//           <p>&copy; {new Date().getFullYear()} Maha AAarogyam Healthcare & Speciality Laboratory Pvt. Ltd. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            {/* Uncomment below if you have the logo */}
            {/* <img src="/path-to-logo.png" alt="Maha Aarogyam Logo" className="mb-4 w-24" /> */}
            <h3 className="text-xl font-bold mb-2">MAHA AAROGYAM</h3>
            <p className="text-gray-400 mb-2">Healthcare & Speciality Laboratory</p>
            <p className="text-gray-400 mb-4">
              Your trusted partner in healthcare and diagnostics. Providing accurate and timely results with state-of-the-art technology.
            </p>
            <p className="text-gray-400"><strong>Director:</strong> Mr. Somnath Khedekar</p>
     
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="text-gray-400 hover:text-white">Health Packages</a></li>
              <li><a href="#technology" onClick={(e) => handleNavClick(e, '#technology')} className="text-gray-400 hover:text-white">Our Technology</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-400 hover:text-white">Locations</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>Shikrapur, Maltan Phata, Pune-Nagar Highway, Pune - 412 208</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+919767736411" className="hover:text-white">+91 97677 36411</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:mahaaarogyam@gmail.com" className="hover:text-white">mahaaarogyam@gmail.com</a>
              </li>
              {/* <li className="flex items-center">
                <span className="mr-2">🌐</span>
                <a href="https://www.mahaarogyam.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  www.mahaarogyam.com
                </a>
              </li> */}
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                <a href="mailto:somnath@mahaarogyam.com" className="hover:text-white">somnath@mahaarogyam.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">🕒</span>
                <span>
                  <strong>Timing:</strong> Sunday to Friday — 8 AM to 8 PM<br />
                  (Saturday Closed)
                </span>
              </li>
              <li className="mt-2">
                <strong>Services:</strong> Haematology, Biochemistry, Immunoassay, Serology, Clinical Pathology
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Maha Aarogyam Healthcare & Speciality Laboratory. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


