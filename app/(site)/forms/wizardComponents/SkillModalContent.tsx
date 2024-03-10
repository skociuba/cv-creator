import React from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/input';

type Props = {
  setSkill: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  setIsModalOpen: (value: boolean) => void;
};

const SkillModalContent: React.FC<Props> = ({
  setIsModalOpen,
  setSkill,
  handleAddItem,
}) => (
  <>
    <p className="py-2">
      <Input label="Skill" onChange={setSkill} name="skill" type="text" />
    </p>

    <Button
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleAddItem(event);
        setIsModalOpen(false);
      }}>
      Save changes
    </Button>
    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
  </>
);

export default SkillModalContent;
