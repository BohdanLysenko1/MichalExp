import * as React from "react";
import { Dialog, Transition } from '@headlessui/react';

// Reusable input class to reduce duplication
const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none";
const buttonClass = "px-6 py-3 rounded-full font-semibold shadow focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200";

export default function ContactCTA() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [duplicateSubmission, setDuplicateSubmission] = React.useState(false);
  const [formData, setFormData] = React.useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    address: '', 
    projectType: '', 
    squareFootage: '', 
    budget: '', 
    startDate: '', 
    details: '' 
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      // auto-insert dashes for US phone format
      const digits = value.replace(/\D/g, '').slice(0, 10);
      if (digits.length > 6) {
        value = `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
      } else if (digits.length > 3) {
        value = `${digits.slice(0,3)}-${digits.slice(3)}`;
      } else {
        value = digits;
      }
    }
    setFormData({ ...formData, [name]: value });
  };
  
  const handleNext = (e: React.FormEvent) => { e.preventDefault(); setStep(2); };
  const handleBack = (e: React.FormEvent) => { e.preventDefault(); setStep(1); };
  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault(); 
    // Send every form field you’ve collected so the API route can map them
    const contactData = {
      firstName : formData.firstName,
      lastName  : formData.lastName,
      email     : formData.email,
      phone     : formData.phone,
      address   : formData.address,
      projectType   : formData.projectType,
      squareFootage : formData.squareFootage,
      budget        : formData.budget,
      startDate     : formData.startDate,
      details       : formData.details,
    };

    try {
      const response = await fetch('/api/hubspot-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
      const result = await response.json();
      if (result.success) {
        // Show thank you message
        setShowThankYou(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setShowThankYou(false);
          setOpen(false); 
          setStep(1);
          setFormData({ 
            firstName: '', 
            lastName: '', 
            email: '', 
            phone: '', 
            address: '', 
            projectType: '', 
            squareFootage: '', 
            budget: '', 
            startDate: '', 
            details: '' 
          });
        }, 3000);
      } else if (result.duplicate) {
        // Duplicate submission detected
        setDuplicateSubmission(true);
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (err) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  React.useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('openEstimateModal', openHandler);
    return () => window.removeEventListener('openEstimateModal', openHandler);
  }, []);

  // Reset duplicate/thank-you state each time modal opens
  React.useEffect(() => {
    if (open) {
      setDuplicateSubmission(false);
      setShowThankYou(false);
    }
  }, [open]);

  return (
    <section id="contact" className="w-full py-12 sm:py-24 bg-[color:var(--secondary)] flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-6 text-[color:var(--primary)] leading-tight">
        Ready to transform your space?
      </h2>
      <div className="btn-conteiner">
        <button className="btn-content" onClick={() => setOpen(true)}>
          Schedule an Estimate
          <span className="icon-arrow">
            <svg width="40" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="arrow-icon-one">
                <path d="M0 10 H40" stroke="white" strokeWidth="3"/>
              </g>
              <g id="arrow-icon-two">
                <path d="M40 10 L35 5" stroke="white" strokeWidth="3"/>
                <path d="M40 10 L35 15" stroke="white" strokeWidth="3"/>
              </g>
              <g id="arrow-icon-three">
                <circle cx="47" cy="10" r="3" fill="white" />
              </g>
            </svg>
          </span>
        </button>
      </div>
      <Transition.Root show={open} as={React.Fragment}>
        <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" open={open} onClose={setOpen}>
          <div className="flex items-center justify-center min-h-dvh px-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
              leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/60 transition-opacity" aria-hidden="true" />
            </Transition.Child>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative max-w-lg w-full p-8 rounded-2xl bg-white shadow-xl flex flex-col items-center max-h-[90dvh] overflow-y-auto">
                {duplicateSubmission ? (
                  <div className="text-center max-w-xs">
                    <h3 className="text-2xl font-bold mb-2 text-[color:var(--primary)]">Application Already Submitted</h3>
                    <p className="mb-6 text-gray-600">
                      It looks like you've already submitted the form.
                      <br />
                      If you have any additional questions, please email us at&nbsp;
                      <a href="mailto:info@michalexp.com" className="text-[color:var(--accent)] underline">info@michalexp.com</a>.
                    </p>
                    <button
                      onClick={() => setOpen(false)}
                      className={`${buttonClass} bg-[color:var(--primary)] text-white hover:bg-[color:var(--accent)]`}
                    >
                      Close
                    </button>
                  </div>
                ) : showThankYou ? (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-[color:var(--primary)]">Thank you for your submission!</h3>
                    <p className="mb-6 text-gray-600">We will be in touch with you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-[color:var(--primary)] text-center">Book Your Free Consultation</h3>
                    <p className="mb-6 text-gray-600 text-center">Fill out the form below and our team will get in touch to discuss your project.</p>
                    <form className="w-full flex flex-col gap-4" onSubmit={step === 1 ? handleNext : handleSubmit}>
                      {step === 1 && (
                        <>
                          <div className="flex gap-4">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={inputClass}
                              required
                            />
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={inputClass}
                              required
                            />
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                            required
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                            title="Phone number must be in 123-456-7890 format"
                            className={inputClass}
                            required
                          />
                          <input 
                            type="text" 
                            name="address" 
                            placeholder="Address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            className={inputClass} 
                            required 
                          />
                          <button 
                            type="submit" 
                            className={`mt-4 ${buttonClass} bg-[color:var(--primary)] text-white hover:bg-[color:var(--accent)]`}
                          >
                            Next
                          </button>
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <input 
                            type="text" 
                            name="projectType" 
                            placeholder="Project Type" 
                            value={formData.projectType} 
                            onChange={handleChange} 
                            className={inputClass} 
                            required 
                          />
                          <input 
                            type="number" 
                            name="squareFootage" 
                            placeholder="Square Footage" 
                            value={formData.squareFootage} 
                            onChange={handleChange} 
                            className={inputClass} 
                            required 
                          />
                          <input 
                            type="text" 
                            name="budget" 
                            placeholder="Budget" 
                            value={formData.budget} 
                            onChange={handleChange} 
                            className={inputClass} 
                            required 
                          />
                          <input 
                            type="date" 
                            name="startDate" 
                            placeholder="Preferred Start Date" 
                            value={formData.startDate} 
                            onChange={handleChange} 
                            className={inputClass} 
                            required 
                          />
                          <textarea 
                            name="details" 
                            placeholder="Additional Details" 
                            value={formData.details} 
                            onChange={handleChange} 
                            className={`${inputClass} min-h-[100px]`} 
                          />
                          <div className="flex justify-between">
                            <button 
                              type="button" 
                              onClick={handleBack} 
                              className={`mt-4 ${buttonClass} bg-gray-300 text-gray-700 hover:bg-gray-400`}
                            >
                              Back
                            </button>
                            <button 
                              type="submit" 
                              className={`mt-4 ${buttonClass} bg-[color:var(--primary)] text-white hover:bg-[color:var(--accent)]`}
                            >
                              Submit
                            </button>
                          </div>
                        </>
                      )}
                    </form>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
}
