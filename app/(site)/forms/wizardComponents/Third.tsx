import React, {useState} from 'react';

import WorkItem from '../../../components/ui/workItem/WorkItem';

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

const Third: React.FC<WorkItemProps> = ({setJob, handleAddItem, data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid-col grid">
      <h1 className="mb-2">Add work Positions</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-accent btn-outline mb-2 w-full max-w-xs">
        add
      </button>
      {data?.workHistory?.map((el) => (
        <div
          key={el?.employer}
          className="my-2 mb-2 w-1/2 rounded-lg border border-accent p-3">
          <p className="pb-2">
            {el?.position} - {el?.employer}
          </p>
          <p>
            {el?.startDate} - {el?.endDate}
          </p>
        </div>
      ))}
      <WorkItem
        handleAddItem={handleAddItem}
        setJob={setJob}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
export default Third;
