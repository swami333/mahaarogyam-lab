import React, { useState, useEffect } from 'react';
import type { HealthPackage } from '../types';
import { HEALTH_PACKAGES } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  healthPackage: HealthPackage | null;
}

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

const PhonePeLogo: React.FC = () => (
    // <svg width="32" height="32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    //     <path fill="#5F259F" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0Z"></path>
    //     <path fill="#FFF" d="M128.533 55.467c-21.464 0-38.932 17.47-38.932 38.932v20.26c0 10.732-8.8 19.533-19.533 19.533h-7.533V74.933a58.463 58.463 0 0 1 58.465-58.465h15.067v38.999zM128.533 154.4c10.732 0 19.533-8.8 19.533-19.533v-30.933h27.067a19.53 19.53 0 0 1 19.533 19.533v7.533h38.999v-15.067a58.463 58.463 0 0 0-58.466-58.465v38.999a38.93 38.93 0 0 0-38.933-38.933H99.6v19.533a19.53 19.53 0 0 1 19.533-19.533h9.4z"></path>
    // </svg>
    <img src="./public/phonepe.png" alt="phonepe" width="32" height="32"/>
);



const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, healthPackage }) => {
  const [currentPackage, setCurrentPackage] = useState(healthPackage);
  const initialFormData = {
    name: '',
    age: '',
    gender: 'Male',
    mobile: '',
    email: '',
    address: '',
    date: '',
    time: 'Morning (8am - 12pm)',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  useEffect(() => {
    setCurrentPackage(healthPackage);
  }, [healthPackage]);
  
  useEffect(() => {
    if (!isOpen) {
        // Reset form when modal closes
        setFormData(initialFormData);
        setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pkg = HEALTH_PACKAGES.find(p => p.name === e.target.value);
    if (pkg) {
      setCurrentPackage(pkg);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) newErrors.age = 'Enter a valid age';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number';
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.address.trim()) newErrors.address = 'Address for home collection is required';
    if (!formData.date) newErrors.date = 'Preferred date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
  
  const handleConfirmClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!validateForm()) {
        e.preventDefault();
    }
  };

  const generateWhatsAppLink = () => {
    if (!currentPackage) return '#';
    
    const message = `
Hello, I would like to book a health package.

*Package Details:*
Package: ${currentPackage.name}
Price: ₹${currentPackage.discountedPrice}

*Patient Details:*
Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Mobile: ${formData.mobile}
Email: ${formData.email || 'N/A'}

*Appointment Details:*
Address: ${formData.address}
Preferred Date: ${new Date(formData.date).toLocaleDateString('en-GB')}
Preferred Time: ${formData.time}

I have completed the payment via UPI. Please find the transaction screenshot attached to confirm my booking.
Thank you!
    `.trim().replace(/\n\s*\n/g, '\n\n');

    return `https://wa.me/919860132901?text=${encodeURIComponent(message)}`;
};
  

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
        onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Health Package</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="package-select" className="block text-sm font-medium text-gray-700 mb-1">
            Select a Package
          </label>
          <select
            id="package-select"
            value={currentPackage?.name || ''}
            onChange={handlePackageChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="" disabled={!!currentPackage}>Choose a package...</option>
            {HEALTH_PACKAGES.map(pkg => (
              <option key={pkg.name} value={pkg.name}>
                {pkg.name} - ₹{pkg.discountedPrice}
              </option>
            ))}
          </select>
        </div>
        
        {currentPackage ? (
          <>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-bold text-lg">{currentPackage.name}</p>
                <p className="text-gray-600">{currentPackage.totalTests} tests included</p>
                <p className="text-2xl font-extrabold text-orange-600 mt-2">₹{currentPackage.discountedPrice}</p>
            </div>
            
             <div className="mt-6 space-y-4">
                <h4 className="font-semibold text-lg text-gray-800 border-b pb-2">1. Patient & Appointment Details</h4>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required />
                         {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required />
                         {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address (Optional)</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                </div>
                 <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address for Home Collection</label>
                    <textarea id="address" name="address" rows={3} value={formData.address} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required></textarea>
                     {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required />
                         {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time Slot</label>
                        <select id="time" name="time" value={formData.time} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required>
                            <option>Morning (8am - 12pm)</option>
                            <option>Afternoon (12pm - 4pm)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* <div className="mt-6">
                <h4 className="font-semibold text-lg text-gray-800 mb-2 border-b pb-2">2. Payment</h4>
                <p className="text-gray-600 text-sm mb-4">Please scan the QR code to pay the package amount using any UPI app.</p>
                <div className="flex justify-center items-center flex-col p-4 border rounded-lg bg-white">
                    <img src='./public/qr.png' alt="PhonePe QR Code" className="w-48 h-48" />
                     <div className="flex items-center mt-2">
                        <PhonePeLogo />
                        <span className="ml-2 font-semibold text-gray-700">Pay with any UPI app</span>
                    </div>
                </div>
            </div> */}
{/* 
             <div className="mt-6 border-t pt-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">3. Confirm Booking</h4>
                <p className="text-xs text-gray-500 mb-4">After filling the details and completing the payment, click the button below to send your booking information and payment confirmation to our WhatsApp number.</p>
                <a href={generateWhatsAppLink()} onClick={handleConfirmClick} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
                    <WhatsAppIcon />
                    Send Details & Payment Confirmation
                </a>
            </div> */}
            {/* 2. Payment Section */}
<div className="mt-6">
  <h4 className="font-semibold text-lg text-gray-800 mb-2 border-b pb-2">2. Payment</h4>
  <p className="text-gray-600 text-sm mb-4">
    Please scan the QR code to pay the package amount using any UPI app.
  </p>
  <div className="flex justify-center items-center flex-col p-4 border rounded-lg bg-white">
    <img src="./public/qr.png" alt="PhonePe QR Code" className="w-48 h-48" />
    <div className="flex items-center mt-2">
      <PhonePeLogo />
      <span className="ml-2 font-semibold text-gray-700">
        Pay with any UPI app
      </span>
    </div>
  </div>

  {/* Upload Screenshot */}
  <div className="mt-6">
    <label
      htmlFor="screenshot"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Upload Payment Screenshot
    </label>
    <input
      type="file"
      id="screenshot"
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setFormData((prev) => ({
              ...prev,
              screenshot: reader.result as string,
            }));
          };
          reader.readAsDataURL(file);
        }
      }}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
    {formData.screenshot && (
      <div className="mt-3">
        <p className="text-sm text-gray-600 mb-1">Preview:</p>
        <img
          src={formData.screenshot}
          alt="Payment Screenshot"
          className="w-40 h-40 object-cover rounded-md border"
        />
      </div>
    )}
    {errors.screenshot && (
      <p className="text-red-500 text-xs mt-1">{errors.screenshot}</p>
    )}
  </div>
</div>

{/* 3. Confirm Booking Section */}
<div className="mt-6 border-t pt-4">
  <h4 className="font-semibold text-lg text-gray-800 mb-2">
    3. Confirm Booking
  </h4>
  <p className="text-xs text-gray-500 mb-4">
    After filling the details and completing the payment, upload your payment
    screenshot above and click the button below to send your booking
    information and payment confirmation to our WhatsApp number.
  </p>
  <a
    href={generateWhatsAppLink()}
    onClick={(e) => {
      if (!validateForm()) {
        e.preventDefault();
        return;
      }
      if (!formData.screenshot) {
        e.preventDefault();
        setErrors((prev) => ({
          ...prev,
          screenshot: "Please upload your payment screenshot",
        }));
      }
    }}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex items-center justify-center bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
  >
    <WhatsAppIcon />
    Send Details & Payment Confirmation
  </a>
</div>

          </>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>Please select a package to see booking details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;



