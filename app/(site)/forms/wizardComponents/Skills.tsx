import React, {useState} from 'react';

import Button from '#/./components/ui/Button';
import Trash from '#/./../public/images/trash.svg';

import ItemModal from '../../../components/ui/modal/ItemModal';
import IconButton from '../../../components/ui/IconButton';

import SkillModalContent from './SkillModalContent';

type Data = {
  skills: {
    skill: string;
  }[];
};

type Props = {
  setSkill: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddItem: (item: string) => void;
  handleRemoveItem: (index: number, item: string) => void;
  data: Data;
};

const Skills: React.FC<Props> = ({
  setSkill,
  handleAddItem,
  handleRemoveItem,
  data,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid-col grid">
      <h1 className="my-2">Add Your skills</h1>
      <Button onClick={() => setIsModalOpen(true)}>add</Button>

      {data?.skills?.map((el, index) => (
        <div
          key={el?.skill}
          className="grid grid-cols-12 border-b  border-accent p-3">
          <div className="col-span-11">{el?.skill}</div>
          <div className="col-span-1 flex items-center justify-center">
            <IconButton
              icon={Trash}
              onClick={() => handleRemoveItem(index, 'skills')}
            />
          </div>
        </div>
      ))}

      <ItemModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <SkillModalContent
          handleAddItem={() => handleAddItem('skills')}
          setSkill={setSkill}
          setIsModalOpen={setIsModalOpen}
        />
      </ItemModal>
    </div>
  );
};
export default Skills;
