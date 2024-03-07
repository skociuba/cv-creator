import React from 'react';
import Modal from 'react-modal';

import Button from '../Button';
import Input from '../input';

type WorkItemProps = {
  setJob: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const WorkItemModal: React.FC<WorkItemProps> = ({
  isModalOpen,
  setIsModalOpen,
  setJob,
  handleAddItem,
}) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={() => setIsModalOpen(false)}
    contentLabel="Edit Post"
    className="mt-12 w-[380px] scale-100 transform items-center justify-center rounded-lg bg-white p-8 shadow-xl transition-transform duration-300"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
          <Input
            label="End date"
            onChange={setJob}
            name="endDate"
            type="date"
          />
        </p>
      </div>
    </div>
    <Button
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleAddItem(event);
        setIsModalOpen(false);
      }}>
      Save changes
    </Button>
    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
  </Modal>
);
export default WorkItemModal;
