import * as React from "react";
import { Dialog, Transition } from '@headlessui/react';

export default function ContactCTA() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({ firstName: '', lastName: '', email: '', phone: '', address: '', projectType: '', squareFootage: '', budget: '', startDate: '', details: '' });
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
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Estimate Request:', formData); setOpen(false); setStep(1); };

  React.useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('openEstimateModal', openHandler);
    return () => window.removeEventListener('openEstimateModal', openHandler);
  }, []);

  return (
    <section id="contact" className="w-full py-16 bg-[color:var(--secondary)] flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[color:var(--primary)]">
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
          <div className="flex items-center justify-center min-h-screen px-4">
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
              <Dialog.Panel className="relative max-w-lg w-full p-8 rounded-2xl bg-white shadow-xl flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2 text-[color:var(--primary)]">Book Your Free Consultation</h3>
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
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none"
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none"
                        required
                      />
                      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none" required />
                      <button type="submit" className="mt-4 px-6 py-3 rounded-full bg-[color:var(--primary)] text-white font-semibold shadow hover:bg-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200">Next</button>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <input type="text" name="projectType" placeholder="Project Type" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none" required />
                      <input type="number" name="squareFootage" placeholder="Square Footage" value={formData.squareFootage} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none" required />
                      <input type="text" name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none" required />
                      <input type="date" name="startDate" placeholder="Preferred Start Date" value={formData.startDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none" required />
                      <textarea name="details" placeholder="Additional Details" value={formData.details} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none min-h-[100px]" />
                      <div className="flex justify-between">
                        <button type="button" onClick={handleBack} className="mt-4 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200">Back</button>
                        <button type="submit" className="mt-4 px-6 py-3 rounded-full bg-[color:var(--primary)] text-white font-semibold shadow hover:bg-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200">Submit</button>
                      </div>
                    </>
                  )}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
}
