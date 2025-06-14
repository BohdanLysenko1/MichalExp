import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { Transition, Dialog } from '@headlessui/react';

const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[color:var(--accent)] focus:outline-none";
const buttonClass = "px-6 py-3 rounded-full font-semibold shadow focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200";
function ContactCTA() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [duplicateSubmission, setDuplicateSubmission] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    squareFootage: "",
    budget: "",
    startDate: "",
    details: ""
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      if (digits.length > 6) {
        value = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      } else if (digits.length > 3) {
        value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
      } else {
        value = digits;
      }
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      projectType: formData.projectType,
      squareFootage: formData.squareFootage,
      budget: formData.budget,
      startDate: formData.startDate,
      details: formData.details
    };
    try {
      const response = await fetch("/api/hubspot-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData)
      });
      const result = await response.json();
      if (result.success) {
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
          setOpen(false);
          setStep(1);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            projectType: "",
            squareFootage: "",
            budget: "",
            startDate: "",
            details: ""
          });
        }, 3e3);
      } else if (result.duplicate) {
        setDuplicateSubmission(true);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (err) {
      alert("There was an error submitting the form. Please try again.");
    }
  };
  React.useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("openEstimateModal", openHandler);
    return () => window.removeEventListener("openEstimateModal", openHandler);
  }, []);
  React.useEffect(() => {
    if (open) {
      setDuplicateSubmission(false);
      setShowThankYou(false);
    }
  }, [open]);
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "w-full py-12 sm:py-24 bg-[color:var(--secondary)] flex flex-col items-center justify-center px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-center mb-6 text-[color:var(--primary)] leading-tight", children: "Ready to transform your space?" }),
    /* @__PURE__ */ jsx("div", { className: "btn-conteiner", children: /* @__PURE__ */ jsxs("button", { className: "btn-content", onClick: () => setOpen(true), children: [
      "Schedule an Estimate",
      /* @__PURE__ */ jsx("span", { className: "icon-arrow", children: /* @__PURE__ */ jsxs("svg", { width: "40", height: "20", viewBox: "0 0 50 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsx("g", { id: "arrow-icon-one", children: /* @__PURE__ */ jsx("path", { d: "M0 10 H40", stroke: "white", strokeWidth: "3" }) }),
        /* @__PURE__ */ jsxs("g", { id: "arrow-icon-two", children: [
          /* @__PURE__ */ jsx("path", { d: "M40 10 L35 5", stroke: "white", strokeWidth: "3" }),
          /* @__PURE__ */ jsx("path", { d: "M40 10 L35 15", stroke: "white", strokeWidth: "3" })
        ] }),
        /* @__PURE__ */ jsx("g", { id: "arrow-icon-three", children: /* @__PURE__ */ jsx("circle", { cx: "47", cy: "10", r: "3", fill: "white" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Transition.Root, { show: open, as: React.Fragment, children: /* @__PURE__ */ jsx(Dialog, { as: "div", className: "fixed z-50 inset-0 overflow-y-auto", open, onClose: setOpen, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center min-h-dvh px-4", children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: React.Fragment,
          enter: "ease-out duration-200",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-150",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 transition-opacity", "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: React.Fragment,
          enter: "ease-out duration-200",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-150",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsx(Dialog.Panel, { className: "relative max-w-lg w-full p-8 rounded-2xl bg-white shadow-xl flex flex-col items-center max-h-[90dvh] overflow-y-auto", children: duplicateSubmission ? /* @__PURE__ */ jsxs("div", { className: "text-center max-w-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-[color:var(--primary)]", children: "Application Already Submitted" }),
            /* @__PURE__ */ jsxs("p", { className: "mb-6 text-gray-600", children: [
              "It looks like you've already submitted the form.",
              /* @__PURE__ */ jsx("br", {}),
              "If you have any additional questions, please email us at ",
              /* @__PURE__ */ jsx("a", { href: "mailto:info@michalexp.com", className: "text-[color:var(--accent)] underline", children: "info@michalexp.com" }),
              "."
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen(false),
                className: `${buttonClass} bg-[color:var(--primary)] text-white hover:bg-[color:var(--accent)]`,
                children: "Close"
              }
            )
          ] }) : showThankYou ? /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-[color:var(--primary)]", children: "Thank you for your submission!" }),
            /* @__PURE__ */ jsx("p", { className: "mb-6 text-gray-600", children: "We will be in touch with you shortly." })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-[color:var(--primary)] text-center", children: "Book Your Free Consultation" }),
            /* @__PURE__ */ jsx("p", { className: "mb-6 text-gray-600 text-center", children: "Fill out the form below and our team will get in touch to discuss your project." }),
            /* @__PURE__ */ jsxs("form", { className: "w-full flex flex-col gap-4", onSubmit: step === 1 ? handleNext : handleSubmit, children: [
              step === 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "firstName",
                      placeholder: "First Name",
                      value: formData.firstName,
                      onChange: handleChange,
                      className: inputClass,
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "lastName",
                      placeholder: "Last Name",
                      value: formData.lastName,
                      onChange: handleChange,
                      className: inputClass,
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    name: "email",
                    placeholder: "Your Email",
                    value: formData.email,
                    onChange: handleChange,
                    className: inputClass,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    name: "phone",
                    placeholder: "Phone Number",
                    value: formData.phone,
                    onChange: handleChange,
                    pattern: "^[0-9]{3}-[0-9]{3}-[0-9]{4}$",
                    title: "Phone number must be in 123-456-7890 format",
                    className: inputClass,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "address",
                    placeholder: "Address",
                    value: formData.address,
                    onChange: handleChange,
                    className: inputClass,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: `mt-4 ${buttonClass} bg-[color:var(--primary)] text-white hover:bg-[color:var(--accent)]`,
                    children: "Next"
                  }
                )
              ] }),
              step === 2 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "projectType",
                    placeholder: "Project Type",
                    value: formData.projectType,
                    onChange: handleChange,
                    className: inputClass,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "number",
                    name: "squareFootage",
                    placeholder: "Square Footage",
                    value: formData.squareFootage,
                    onChange: handleChange,
                    className: inputClass,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "budget",
                    placeholder: "Budget",
                    value: formData.budget,
                    onChange: handleChange,
                    className: inputClass,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "date",
                    name: "startDate",
                    placeholder: "Preferred Start Date",
                    value: formData.startDate,
                    onChange: handleChange,
                    className: inputClass,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "details",
                    placeholder: "Additional Details",
                    value: formData.details,
                    onChange: handleChange,
                    className: `${inputClass} min-h-[100px]`
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleBack,
                      className: `mt-4 ${buttonClass} bg-gray-300 text-gray-700 hover:bg-gray-400`,
                      children: "Back"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      className: `mt-4 ${buttonClass} bg-[color:var(--primary)] text-white hover:bg-[color:var(--accent)]`,
                      children: "Submit"
                    }
                  )
                ] })
              ] })
            ] })
          ] }) })
        }
      )
    ] }) }) })
  ] });
}

export { ContactCTA as C };
