import React from 'react';

type Props = {
  handlePrevious: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmit: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  journeyStep: number;
};

const WizardButtons: React.FC<Props> = ({
  handlePrevious,
  handleNext,
  handleSubmit,
  journeyStep,
}) => (
  <>
    <button
      disabled={journeyStep === 0}
      className="btn btn-accent btn-outline mb-2 mr-3 w-20"
      onClick={(e) => handlePrevious(e)}>
      back
    </button>
    {journeyStep !== 5 ? (
      <button
        className="btn btn-accent btn-outline mb-2 w-20"
        onClick={(e) => handleNext(e)}>
        next
      </button>
    ) : (
      <button
        className="btn btn-accent btn-outline w-full max-w-xs"
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleSubmit(
            event as unknown as React.ChangeEvent<
              HTMLInputElement | HTMLSelectElement
            >,
          )
        }>
        Submit
      </button>
    )}
  </>
);

export default WizardButtons;
