import React from 'react';

import Input from '../../components/ui/input';
type BasicProps = {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const Basic: React.FC<BasicProps> = ({handleChange}) => (
  <div>
    {' '}
    <p className="grid-col grid">
      First Name
      <input
        onChange={handleChange}
        name="firstName"
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent my-2 w-full max-w-xs"
      />
    </p>
    <p className="grid-col grid">
      <Input
        label="Last Name"
        onChange={handleChange}
        name="lastName"
        type="text"
      />
    </p>
    <p className="grid-col grid">
      Age
      <input
        onChange={handleChange}
        name="age"
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent  my-2  w-full max-w-xs"
      />
    </p>
    <p className="grid-col grid">
      Nationality
      <select
        onChange={handleChange}
        name="nationality"
        className="select select-accent my-2  w-full max-w-xs">
        <option disabled={true} selected={true} />

        <option>Polish</option>
        <option>English</option>
        <option>Ukrainian</option>
      </select>
    </p>
    <p className="grid-col grid gap-3">
      Sex
      <div className="flex items-center">
        {/* prettier-ignore */}
        <input
      onChange={handleChange}
      value="m"
      type="radio"
      name="sex"
      className="radio radio-accent mr-2"
    />{' '}
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
    />{' '}
        <span>Woman</span>
      </div>
    </p>
  </div>
);

export default Basic;
