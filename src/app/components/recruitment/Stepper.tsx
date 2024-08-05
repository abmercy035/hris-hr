import { useState } from 'react';
import Stepone from './steps/Stepone';
import Steptwo from './steps/Steptwo';
import Stepthree from './steps/Stepthree';
import Stepfour from './steps/Stepfour';
import Review from './steps/Review';
import { ArrowRight } from 'lucide-react';

const steps = ['Job details', 'Job description', 'Qualifications', 'Application details', 'Preview'];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission or final step logic here
      alert('Form submitted!');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-4 overflow-x-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs ${currentStep === index ? 'bg-green-600' : 'bg-gray-300'}`}
            >
              {index + 1}
            </div>
            <div className="ml-2 text-xs">
              {step}
            </div>
          </div>
        ))}
      </div>
      <div>
        {currentStep === 0 && <div><Stepone /></div>}
        {currentStep === 1 && <div><Steptwo /></div>}
        {currentStep === 2 && <div><Stepthree /></div>}
        {currentStep === 3 && <div><Stepfour /></div>}
        {currentStep === 4 && <div><Review /></div>}
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded flex items-center w-24"><ArrowRight className='w-4 h-4 me-2 items-center' /> Previous</button>
        <button onClick={nextStep} className="px-4 ms-3 py-2 bg-green-500 text-white rounded">
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
