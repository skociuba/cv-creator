import React from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/input';

type Props = {
  setJob: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  setIsModalOpen: (value: boolean) => void;
};

const EducationModalContent: React.FC<Props> = ({
  setIsModalOpen,
  setJob,
  handleAddItem,
}) => (
  <div>
    <p className="pt-3">
      <Input label="Position" onChange={setJob} name="position" type="text" />
    </p>
    <p className="pt-3">
      <Input label="Employer" onChange={setJob} name="employer" type="text" />
    </p>
    <div className="grid grid-cols-2 py-3">
      <p
        className="pr-3 
        ">
        <Input
          label="Start date"
          onChange={setJob}
          name="startDate"
          type="date"
        />
      </p>
      <p className="">
        <Input label="End date" onChange={setJob} name="endDate" type="date" />
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
