import React from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/input';
import degrees from '../../../constants/degrees.json';
type Props = {
  setEducation: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  setIsModalOpen: (value: boolean) => void;
};

const EducationModalContent: React.FC<Props> = ({
  setIsModalOpen,
  setEducation,
  handleAddItem,
}) => (
  <div>
    <p className="pt-3">
      <Input label="School" onChange={setEducation} name="school" type="text" />
    </p>

    <p className="py-3">
      <select
        onChange={setEducation}
        name="degree"
        defaultValue="defaultOptionValue"
        className="select select-accent mt-2  w-full max-w-xs">
        <option disabled={true} value="defaultOptionValue" />
        {degrees.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </p>
    <div className="grid grid-cols-2 py-3">
      <p
        className="pr-3 
        ">
        <Input
          label="Start date"
          onChange={setEducation}
          name="startDate"
          type="date"
        />
      </p>
      <p className="">
        <Input
          label="End date"
          onChange={setEducation}
          name="endDate"
          type="date"
        />
      </p>
    </div>
    <Button
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleAddItem(event);
        setIsModalOpen(false);
      }}>
      Save changes
    </Button>
    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
  </div>
);

export default EducationModalContent;
