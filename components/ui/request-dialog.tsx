"use client";
import type React from "react";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useFormSubmit } from "@/hooks/use-form-submit";

// Define types for the component props and state
interface Service {
  title: string;
  [key: string]: any; // Allow for other properties in service objects
}

interface RequestFormDialogProps {
  isMobile?: boolean;
  services?: Service[];
  text: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  service: string;
  budgetRange: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
}

const RequestFormDialog: React.FC<RequestFormDialogProps> = ({
  isMobile = false,
  services = [],
  text,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    service: "",
    budgetRange: "$1000-$5000",
  });

  const { isSubmitting, submitSuccess, submitError, submitForm } =
    useFormSubmit();

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  // Convert any server-side functions to simple string values
  const safeServices = services.map((service) => ({
    ...service,
    title:
      typeof service.title === "string" ? service.title : "Unknown Service",
  }));

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    return /^\d{10,15}$/.test(phone.replace(/[^0-9]/g, ""));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error when user types
    if (name in errors) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
      valid = false;
    } else if (!validateEmail(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const success = await submitForm(formData);

    if (success) {
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        service: "",
        budgetRange: "$1000-$5000",
      });
    }
  };

  const formContent = (
    <>
      {submitSuccess ? (
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
          <div className="w-16 h-16 mb-6 rounded-full bg-[#ea5c1c]/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ea5c1c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium text-white mb-2">
            Submission Successful!
          </h3>
          <p className="text-[#898989] mb-8 max-w-md">
            Thank you for your interest! Your information has been submitted
            successfully. We&#39;ll be in touch with you shortly.
          </p>
        </div>
      ) : submitError ? (
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
          <div className="w-16 h-16 mb-6 rounded-full bg-[#ea5c1c]/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ea5c1c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium text-white mb-2">
            Submission Failed
          </h3>
          <p className="text-[#898989] mb-8 max-w-md">
            There was a problem submitting your request. Please try again or
            contact us directly for assistance.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className={`${isMobile ? "" : "flex gap-6"}`}>
            <div className={`${isMobile ? "mb-8" : "flex-1"}`}>
              <label className="block text-sm text-[#898989] mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full bg-transparent border-b-2 ${
                  errors.firstName ? "border-red-500" : "border-[#ea5c1c]"
                } pb-2 focus:outline-none`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className={`${isMobile ? "" : "flex-1"}`}>
              <label className="block text-sm text-[#898989] mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full bg-transparent border-b-2 ${
                  errors.lastName ? "border-red-500" : "border-[#ea5c1c]"
                } pb-2 focus:outline-none`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#898989] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className={`w-full bg-transparent border-b-2 ${
                errors.emailAddress ? "border-red-500" : "border-[#ea5c1c]"
              } pb-2 focus:outline-none`}
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-[#898989] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`w-full bg-transparent border-b-2 ${
                errors.phoneNumber ? "border-red-500" : "border-[#ea5c1c]"
              } pb-2 focus:outline-none`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-[#898989] mb-2">Service</label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full text-base bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none appearance-none text-white"
              >
                <option value="">Please select service</option>
                {safeServices.map((service, index) => (
                  <option
                    className="text-white"
                    key={`${service.title}-${index}`}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#898989"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#898989] text-sm mb-2">Budget</label>
            <div className="relative">
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full text-base bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none appearance-none text-white"
              >
                <option value="$1000-$5000" className="text-base">
                  $1000-$5000
                </option>
                <option value="$5000-$10,000" className="text-base">
                  $5000-$10,000
                </option>
                <option value="$10,000-$20,000" className="text-base">
                  $10,000-$20,000
                </option>
                <option value="> $20,000" className="text-base">
                  $20,000+
                </option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#898989"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="pb-4 flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white w-[183px] h-[43px] px-[25px] py-[17px] rounded-none"
            >
              {isSubmitting ? "Submitting..." : text}
            </Button>
          </div>
        </form>
      )}
    </>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size={isMobile ? "sm" : "default"}
          className="bg-[#E65722] hover:bg-[#E65722]/90"
        >
          {text}
        </Button>
      </DialogTrigger>
      {isMobile ? (
        <DialogContent className="p-0 border-[6px] border-[#ffffff0a] flex items-center justify-center bg-[#151515] mx-auto max-w-[92vw] w-full max-h-[90vh] overflow-y-auto">
          <div className="p-4 w-full">
            {/* Explicitly added text with better styling */}
            <h2 className="text-[20px] font-medium mb-6 text-white w-full text-center">
              Start a project
            </h2>
            {formContent}
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="p-0 rounded-none max-w-[971px] h-full max-h-[647px] w-full flex overflow-hidden bg-[#151515] text-white border-[#ffffff0a] border-[6px]">
          <div className="w-full flex">
            {/* Left side with heading and grid background */}
            <div
              className="w-1/2 relative flex items-center px-16 py-24"
              style={{
                backgroundImage: `
                linear-gradient(to bottom right, rgba(234, 92, 28, 0.3), rgba(21, 21, 21, 0.9)), 
                url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='18' height='18' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23333' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23151515'/%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")
              `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-6xl font-bold --font-inter leading-tight">
                Let&#39;s bring
                <br />
                your vision
                <br />
                to Life.
              </h1>
            </div>

            {/* Right side with form */}
            <div className="w-1/2 p-6 relative">
              <h2 className="text-[20px] font-medium mb-10">Start a project</h2>
              {formContent}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default RequestFormDialog;
