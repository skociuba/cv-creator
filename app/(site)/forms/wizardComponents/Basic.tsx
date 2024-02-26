import React from 'react';

import Input from '../../../components/ui/input';
type BasicProps = {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const Basic: React.FC<BasicProps> = ({handleChange}) => (
  <div>
    <div className="grid-col grid">
      First Name
      <input
        onChange={handleChange}
        name="firstName"
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent my-2 w-full max-w-xs"
      />
    </div>
    <div className="grid-col grid">
      <Input
        label="Last Name"
        onChange={handleChange}
        name="lastName"
        type="text"
      />
    </div>
    <div className="grid-col grid">
      Age
      <input
        onChange={handleChange}
        name="age"
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent  my-2  w-full max-w-xs"
      />
    </div>
    <div className="grid-col grid">
      Nationality
      <select
        onChange={handleChange}
        name="nationality"
        defaultValue="defaultOptionValue"
        className="select select-accent my-2  w-full max-w-xs">
        <option disabled={true} value="defaultOptionValue" />

        <option>Polish</option>
        <option>English</option>
        <option>Ukrainian</option>
      </select>
    </div>
    <div className="grid-col grid gap-3">
      Sex
      <div className="flex items-center">
        {/* prettier-ignore */}
        <input
          onChange={handleChange}
          value="m"
          type="radio"
          name="sex"
          className="radio radio-accent mr-2"
        />
        <span>Man</span>
      </div>
      <div className="flex items-center">
        {/* prettier-ignore */}
        <input
          onChange={handleChange}
          type="radio"
          name="sex"
          value="w"
          className="radio radio-accent mr-2"
        />
        <span>Woman</span>
      </div>
    </div>
  </div>
);

export default Basic;
