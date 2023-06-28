import { NavLink } from "react-router-dom";

export interface IStepperProps {
  steps: { linkTo: string | null; name: string }[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: IStepperProps) => {
  return (
    <div className="c-stepper-container">
      <ul className="c-stepper">
        {steps.map((step, index) => {
          return step.linkTo !== null ? (
            <li key={`step-${step.name}`}>
              <NavLink
                to={step.linkTo}
                className={
                  "c-step-item" + (currentStep === index ? " active" : "")
                }
              >
                <span>{index + 1}</span>
                {step.name}
              </NavLink>
            </li>
          ) : (
            <li key={`step-${step.name}`}>
              <div
                className={
                  "c-step-item" + (currentStep === index ? " active" : "")
                }
              >
                <span>{index + 1}</span>
                {step.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stepper;
