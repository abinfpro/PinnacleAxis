import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InboxIcon, Phone, Instagram,Twitter,Facebook } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactCard from "../Components/ContactCard";


// --- Constants ---
const ACCENT_ORANGE = "#EA4D33";
const PRIMARY_DARK = "#131C23";
// SECONDARY_DARK is unused, so it's kept but not strictly necessary

// --- Custom Styles for Navbar consistency (Tailwind classes would be better) ---
const customStyles = `

    .nav-link {
        position: relative;
        padding-bottom: 5px; /* Space for the underline */
        color: #6B7280; /* Default text color */
        transition: color 0.15s ease;
    }

    .nav-link:hover, .nav-link.active {
        color: ${ACCENT_ORANGE}; /* Active/Hover text color */
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: transparent;
        transition: background-color 0.15s ease;
    }

    .nav-link:hover::after, .nav-link.active::after {
        background-color: ${ACCENT_ORANGE};
    }

    /* Manually set 'Contact Us' link as active */
    .nav-link[href="/contact"] {
        color: ${ACCENT_ORANGE};
    }
    .nav-link[href="/contact"]::after {
        background-color: ${ACCENT_ORANGE};
    }

    /* Style for focus ring on form inputs to match theme */
    .focus-ring-red {
        border-color: #d1d5db; /* Default border color */
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .focus-ring-red:focus {
        border-color: ${ACCENT_ORANGE};
        box-shadow: 0 0 0 1px ${ACCENT_ORANGE};
        outline: none;
    }
`;

// --- Main Contact Page Component ---
const Contactpage = () => {
  // 1. Form State Management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  // 2. Handler for all form field changes
  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    const key = type === "radio" ? name : id;
    const val = type === "radio" ? value : value;

    setFormData((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  // 3. Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
      let phoneNumber = "+966 556207221"; // Your WhatsApp number with country code
        const message = `
         Name: ${formData.firstName} ${formData.lastName}
         Email: ${formData.email}
         Phone: ${formData.phone}
         Subject: ${formData.subject}
         Message: ${formData.message}`;
       const encodedMessage = encodeURIComponent(message.trim());

       const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
       window.open(url, '_blank').focus();

    // In a real application, you would send this data to a backend API here.
    alert("Message sent successfully!");
    // Optionally reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  // --- JSX Rendering ---
  return (
    <>


      {/* Inject custom styles */}
      <style>{customStyles}</style>

     <Navbar/>

      {/* --- Main Contact Section --- */}
      <div id="contact-form-section" className="py-8 sm:py-12 px-4 sm:px-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-gray-900">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            Any question or remarks? Just write us a message!
          </p>

          <div style={{ background: "#E1E6E9" }} className="flex flex-col lg:flex-row bg-white overflow-hidden">
            {/* Left Column: Contact Info */}
            <div
              className="w-full mx-2 my-2 lg:w-2/5 text-white p-6 sm:p-8 lg:p-10 xl:p-12 relative overflow-hidden"
              style={{ backgroundColor: PRIMARY_DARK }}
            >
              <h2 className="text-3xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-12 text-sm">
                Say something to start a live chat!
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-5 mt-0.5 flex-shrink-0"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
                  </svg>
                  <span className="text-gray-200 text-sm">
                  +966 556207221
                  </span>
                </div>
                {/* Email */}
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-5 mt-0.5 flex-shrink-0"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                  </svg>
                  <span className="text-gray-200 text-sm">
                  info@pinnaxsa.com
                  </span>
                </div>
                {/* Address */}
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-5 mt-0.5 flex-shrink-0"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                  </svg>
                  <span className="text-gray-200 text-sm leading-relaxed">
                  Al Asqalini Street, Al Sinaiyah
                  Dammam 32443, Saudi Arabia
                    States
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-20 relative z-10">
                {/* Icons (Twitter, Dribbble/Globe, LinkedIn) - SVGs remain placeholders */}
                <div className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition">
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                    <Instagram size={24} color="#E4405F" />
                  </svg>
                </div>
                <div className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition">
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <Twitter size={24} color="#E4405F" />
                  </svg>
                </div>
                <div className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition">
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <Facebook size={24} color="#E4405F" />
                  </svg>
                </div>
              </div>

              {/* Background Circle Decoration */}
              <div
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white opacity-5"
                aria-hidden="true"
              ></div>
            </div>

            {/* Right Column: Contact Form */}
            <div style={{ background: "#E1E6E9" }} className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 xl:p-12">
              <form id="contactForm" onSubmit={handleSubmit}>
                {/* Row 1: Name Fields */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-6">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded bg-transparent text-gray-600 text-sm focus-ring-red"
                    />
                    <div className="w-full max-w-[278px] bg-[#8D8D8D] h-[0.5px]"></div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded bg-transparent text-gray-600 text-sm focus-ring-red"
                    />
                    <div className="w-full max-w-[278px] bg-[#8D8D8D] h-[0.5px]"></div>
                  </div>
                </div>

                {/* Row 2: Contact Info Fields */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-6">
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded bg-transparent text-gray-600 text-sm focus-ring-red"
                    />
                    <div className="w-full max-w-[278px] bg-[#8D8D8D] h-[0.5px]"></div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded bg-transparent text-gray-600 text-sm focus-ring-red"
                    />
                    <div className="w-full max-w-[278px] bg-[#8D8D8D] h-[0.5px]"></div>
                  </div>
                </div>

                {/* Row 3: Subject Selection (Radio Buttons) */}
                <div className="mb-6">
                  <div className="block text-sm font-medium text-gray-700 mb-3">
                    Select Subject?
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      "General Inquiry",
                      "Project Quote",
                      "Career Opportunity",
                      "Technical Support",
                    ].map((subject, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="radio"
                          id={`inquiry${index + 1}`}
                          name="subject"
                          value={subject}
                          checked={formData.subject === subject}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500 cursor-pointer"
                          style={{ color: ACCENT_ORANGE }}
                        />
                        <label
                          htmlFor={`inquiry${index + 1}`}
                          className="ml-2 text-[12px] font-normal text-gray-700 cursor-pointer select-none"
                        >
                          {subject}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 4: Message Textarea */}
                <div className="mb-6 flex flex-col gap-5">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <div>
                    <input
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded bg-transparent text-gray-600 text-sm focus-ring-red"
                    />
                    <div className="w-full max-w-[578px] bg-[#8D8D8D] h-[0.5px]"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex pt-20 justify-center">
                <button 
                  onClick={() => navigate("/contact")}
                  style={{ borderColor: "#EA4D33" }}
                  className="px-4 py-2 backdrop-blur text-[10px] sm:text-[18px] lg:text-[22px] font-normal border-3 hover:bg-opacity-10 transition"
                >
                  Send Message 
                </button>
                <div
                  style={{ 
                    backgroundColor: "#EA4D33", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center" 
                  }}
                  className="w-[37px] h-[37px] md:w-[48px] md:h-[48px] lg:w-[54px] lg:h-[54px]"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform -rotate-360"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#fff" }}
                  >
                    <line x1="1" y1="22" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Card Section */}
      <ContactCard 
        title="Let's Connect"
        contacts={[
          {
            title: "There are many variations",
            phone: "+966 556207221",
            email: "info@pinnaxsa.com"
          },
        ]}
        showImage={true}
        imageSrc="/contact.webp"
        imageAlt="Contact Banner"
      />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contactpage;
