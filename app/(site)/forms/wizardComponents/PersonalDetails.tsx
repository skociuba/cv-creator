import React from 'react';

import Input from '#/components/ui/Input';
type BasicProps = {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const Basic: React.FC<BasicProps> = ({handleChange}) => (
  <div className="mb-3 grid grid-cols-2 gap-3">
    <div className="grid-col grid">
      <Input
        label="First Name"
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <div className="grid-col mt-2 grid">
        Nationality
        <select
          onChange={handleChange}
          name="nationality"
          defaultValue="defaultOptionValue"
          className="select select-accent mt-2  w-full max-w-xs">
          <option disabled={true} value="defaultOptionValue" />

          <option>Polish</option>
          <option>English</option>
          <option>Ukrainian</option>
        </select>
      </div>

      <Input label="Email" onChange={handleChange} name="email" type="text" />
      <Input
        label="Job title"
        onChange={handleChange}
        name="jobTitle"
        type="text"
        placeholder="Type here"
      />
    </div>
    <div className="grid-col">
      <Input
        label="Last Name"
        onChange={handleChange}
        name="lastName"
        type="text"
      />

      <Input label="City" onChange={handleChange} name="city" type="text" />

      <Input label="Phone" onChange={handleChange} name="phone" type="text" />
    </div>
  </div>
);

export default Basic;
