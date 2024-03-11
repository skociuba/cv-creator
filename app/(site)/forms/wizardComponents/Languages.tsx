import React, {useState} from 'react';

import Button from '#/./components/ui/Button';
import Trash from '#/./../public/images/trash.svg';

import ItemModal from '../../../components/ui/modal/ItemModal';
import IconButton from '../../../components/ui/IconButton';

import LanguageModalContent from './LanguageModalContent';

type Data = {
  languages: {
    language: string;
    level: string;
  }[];
};

type Props = {
  setLanguage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddItem: (item: string) => void;
  handleRemoveItem: (index: number, item: string) => void;
  data: Data;
};

const Languages: React.FC<Props> = ({
  setLanguage,
  handleAddItem,
  handleRemoveItem,
  data,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid-col grid">
      <h1 className="my-2">Add languages</h1>
      <Button onClick={() => setIsModalOpen(true)}>add</Button>

      {data?.languages?.map((el, index) => (
        <div
          key={el?.language}
          className="grid grid-cols-12 border-b  border-accent p-3">
          <div className="col-span-11">
            <p className="pb-2">
              {el?.language} - {el?.level}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <IconButton
              icon={Trash}
              onClick={() => handleRemoveItem(index, 'languages')}
            />
          </div>
        </div>
      ))}

      <ItemModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <LanguageModalContent
          handleAddItem={() => handleAddItem('languages')}
          setLanguage={setLanguage}
          setIsModalOpen={setIsModalOpen}
        />
      </ItemModal>
    </div>
  );
};
export default Languages;
