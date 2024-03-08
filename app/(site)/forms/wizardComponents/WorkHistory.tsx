import React, {useState} from 'react';

import Button from '#/./components/ui/Button';
import Trash from '#/./../public/images/trash.svg';

import ItemModal from '../../../components/ui/modal/ItemModal';
import IconButton from '../../../components/IconButton';

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
          className="my-2 mb-2 grid grid-cols-12 rounded-lg border  border-accent p-3">
          <div className="col-span-11">
            <p className="pb-2">
              {el?.position} - {el?.employer}
            </p>
            <p>
              {el?.startDate} - {el?.endDate}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            {' '}
            <IconButton
              icon={Trash}
              onClick={() => handleRemoveItem(index, 'workHistory')}
            />
          </div>
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
