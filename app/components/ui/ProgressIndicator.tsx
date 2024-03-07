import React from 'react';
type Props = {
  journeyStep: number;
  translations: string[];
};
const ProgressIndicator: React.FC<Props> = ({translations, journeyStep}) => (
  <ul className="steps h-20">
    {translations?.map((el, index) => (
      <li
        key={el}
        className={`${journeyStep === index ? 'step-accent' : ''} step`}>
        {el}
      </li>
    ))}
  </ul>
);

export default ProgressIndicator;
