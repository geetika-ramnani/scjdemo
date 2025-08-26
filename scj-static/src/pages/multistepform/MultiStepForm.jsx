import { useState } from "react";
import Step1UserDetails from "./Step1UserDetails";
import Step2Agreement from "./Step2Agreement";
import Step3Confirmation from "./Step3Confirmation";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    company: "",
    address: "",
    agreementStatus: null, // "accepted" | "denied" | "requested_changes"
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateForm = (data) => setFormData((prev) => ({ ...prev, ...data }));

  return (
    <div className="min-h-screen p-6 mt-10">
      {step === 1 && (
        <Step1UserDetails
          formData={formData}
          updateForm={updateForm}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2Agreement
          updateForm={updateForm}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3Confirmation formData={formData} prevStep={prevStep} />
      )}
    </div>
  );
}
