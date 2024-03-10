import React, {useState} from 'react';

import Button from '#/./components/ui/Button';
import Trash from '#/./../public/images/trash.svg';

import ItemModal from '../../../components/ui/modal/ItemModal';
import IconButton from '../../../components/ui/IconButton';

import EducationModalContent from './EducationModalContent';
type Data = {
  educationHistory: {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
  }[];
};

type Props = {
  setEducation: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddItem: (item: string) => void;
  handleRemoveItem: (index: number, item: string) => void;
  data: Data;
};
const EducationHistory: React.FC<Props> = ({
  setEducation,
  handleAddItem,
  handleRemoveItem,
  data,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid-col grid">
      <h1 className="my-2">Add education history</h1>
      <Button onClick={() => setIsModalOpen(true)}>add</Button>
      {data?.educationHistory?.map((el, index) => (
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
              onClick={() => handleRemoveItem(index, 'educationHistory')}
            />
          </div>
        </div>
      ))}
      <ItemModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <EducationModalContent
          handleAddItem={() => handleAddItem('educationHistory')}
          setEducation={setEducation}
          setIsModalOpen={setIsModalOpen}
        />
      </ItemModal>
    </div>
  );
};
export default EducationHistory;
