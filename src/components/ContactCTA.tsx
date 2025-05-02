import * as React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

export default function ContactCTA() {
  const [open, setOpen] = React.useState(false);
  return (
    <section className="w-full py-16 bg-blue-50 flex flex-col items-center justify-center">
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
        <DialogContent className="max-w-lg w-full p-8 rounded-2xl bg-white shadow-xl flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Book Your Free Consultation</h3>
          <p className="mb-6 text-gray-600 text-center">Fill out the form below and our team will get in touch to discuss your project.</p>
          <form className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none min-h-[100px]"
              required
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200"
            >
              Send Request
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
