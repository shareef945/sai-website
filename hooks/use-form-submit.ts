import { useState } from 'react';

interface SubmitFormParams {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  service?: string;
  budgetRange?: string;
}

interface SubmitFormResult {
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string | null;
  submitForm: (data: SubmitFormParams) => Promise<boolean>;
}

export function useFormSubmit(): SubmitFormResult {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitForm = async (data: SubmitFormParams): Promise<boolean> => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch("/api/submit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        return true;
      } else {
        setSubmitError(result.error || "Failed to submit form");
        return false;
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred");
      console.error("Error submitting form:", error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitSuccess,
    submitError,
    submitForm,
  };
}