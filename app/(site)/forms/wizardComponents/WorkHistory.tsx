import React, {useState} from 'react';

import Button from '#/./components/ui/Button';

import ItemModal from '../../../components/ui/modal/ItemModal';

import WorkModalContent from './WorkModalContent';
type Data = {
  workHistory: {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
  }[];
};

type Props = {
  setJob: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddItem: (item: string) => void;
  handleRemoveItem: (index: number, item: string) => void;
  data: Data;
};

const WorkHistory: React.FC<Props> = ({
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
      {data?.workHistory?.map((el, index) => (
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
          <Button onClick={() => handleRemoveItem(index, 'workHistory')}>
            remove
          </Button>
        </div>
      ))}
      <ItemModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <WorkModalContent
          handleAddItem={() => handleAddItem('workHistory')}
          setJob={setJob}
          setIsModalOpen={setIsModalOpen}
        />
      </ItemModal>
    </div>
  );
};
export default WorkHistory;
