import React, {useState} from 'react';

import Button from '#/./components/ui/Button';

import WorkItemModal from '../../../components/ui/workItem/WorkItemModal';
type Data = {
  educationHistory: {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
  }[];
};

type WorkItemProps = {
  setJob: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddItem: (item: string) => void;
  handleRemoveItem: (index: number, item: string) => void;
  data: Data;
};
const EducationHistory: React.FC<WorkItemProps> = ({
  setJob,
  handleAddItem,
  handleRemoveItem,
  data,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid-col grid">
      <h1 className="my-2">Add work Positions</h1>
      <Button onClick={() => setIsModalOpen(true)}>add</Button>
      {data?.educationHistory?.map((el, index) => (
        <div
          key={el?.employer}
          className="my-2 mb-2 grid grid-cols-2 rounded-lg border  border-accent p-3">
          <div>
            <p className="pb-2">
              {el?.position} - {el?.employer}
            </p>
            <p>
              {el?.startDate} - {el?.endDate}
            </p>
          </div>
          <Button onClick={() => handleRemoveItem(index, 'educationHistory')}>
            remove
          </Button>
        </div>
      ))}
      <WorkItemModal
        handleAddItem={() => handleAddItem('educationHistory')}
        setJob={setJob}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
export default EducationHistory;
