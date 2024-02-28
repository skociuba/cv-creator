import React from 'react';

type AboutProps = {
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Second: React.FC<AboutProps> = ({handleChange}) => (
  <div className="grid-col grid">
    <h1 className="mb-2">Tell us something about Yourself </h1>

    <textarea
      className="textarea textarea-accent textarea-lg w-full max-w-xs"
      style={{height: '400px'}}
      onChange={handleChange}
      name="about"
      placeholder="about"
    />
  </div>
);
export default Second;
