import * as React from "react";
import { Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent } from "./ui/dialog";

export default function ContactCTA() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', address: '', projectType: '', squareFootage: '', budget: '', startDate: '', details: '' });
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
    <section id="contact" className="w-full py-16 bg-blue-50 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
        Ready to transform your space?
      </h2>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xl font-semibold shadow-lg hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200"
          >
            Schedule a Consultation
          </button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent className="max-w-lg w-full p-8 rounded-2xl bg-white shadow-xl flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Book Your Free Consultation</h3>
            <p className="mb-6 text-gray-600 text-center">Fill out the form below and our team will get in touch to discuss your project.</p>
            <form className="w-full flex flex-col gap-4" onSubmit={step === 1 ? handleNext : handleSubmit}>
              {step === 1 && (
                <>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                    required
                  />
                  <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none" required />
                  <button type="submit" className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200">Next</button>
                </>
              )}
              {step === 2 && (
                <>
                  <input type="text" name="projectType" placeholder="Project Type" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none" required />
                  <input type="number" name="squareFootage" placeholder="Square Footage" value={formData.squareFootage} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none" required />
                  <input type="text" name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none" required />
                  <input type="date" name="startDate" placeholder="Preferred Start Date" value={formData.startDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none" required />
                  <textarea name="details" placeholder="Additional Details" value={formData.details} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none min-h-[100px]" />
                  <div className="flex justify-between">
                    <button type="button" onClick={handleBack} className="mt-4 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-400 transition-all duration-200">Back</button>
                    <button type="submit" className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200">Submit</button>
                  </div>
                </>
              )}
            </form>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </section>
  );
}
