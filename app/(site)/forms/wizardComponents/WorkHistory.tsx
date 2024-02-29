import React, {useState} from 'react';

import Button from '#/./components/ui/Button';

import WorkItemModal from '../../../components/ui/workItem/WorkItemModal';
type Data = {
  workHistory: {
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
  handleAddItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  data: Data;
};

const WorkHistory: React.FC<WorkItemProps> = ({
  setJob,
  handleAddItem,
  data,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid-col grid">
      <h1 className="my-2">Add work Positions</h1>
      <Button onClick={() => setIsModalOpen(true)}>add</Button>
      {data?.workHistory?.map((el) => (
        <div
          key={el?.employer}
          className="my-2 mb-2 rounded-lg border border-accent p-3">
          <p className="pb-2">
            {el?.position} - {el?.employer}
          </p>
          <p>
            {el?.startDate} - {el?.endDate}
          </p>
        </div>
      ))}
      <WorkItemModal
        handleAddItem={handleAddItem}
        setJob={setJob}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
export default WorkHistory;
