import React from 'react';

import Button from '../../../components/ui/Button';
import language from '../../../constants/languages.json';
import languageLevel from '../../../constants/languageLevel.json';
type Props = {
  setLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleAddItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  setIsModalOpen: (value: boolean) => void;
};

const LanguagesModalContent: React.FC<Props> = ({
  setIsModalOpen,
  setLanguage,
  handleAddItem,
}) => (
  <div>
    <p className="pt-3">
      <select
        onChange={setLanguage}
        name="language"
        defaultValue="defaultOptionValue"
        className="select select-accent mt-2  w-full max-w-xs">
        <option disabled={true} value="defaultOptionValue" />
        {language.map((el) => (
          <option key={el.name}>{el.name}</option>
        ))}
      </select>
    </p>
    <p className="py-3">
      <select
        onChange={setLanguage}
        name="level"
        defaultValue="defaultOptionValue"
        className="select select-accent mt-2  w-full max-w-xs">
        <option disabled={true} value="defaultOptionValue" />
        {languageLevel.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </p>

    <Button
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleAddItem(event);
        setIsModalOpen(false);
      }}>
      Save changes
    </Button>
    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
  </div>
);

export default LanguagesModalContent;
