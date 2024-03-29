import React from 'react';
import Image, {StaticImageData} from 'next/image';
type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon: StaticImageData;
};
const IconButton: React.FC<Props> = ({onClick, icon}) => (
  <button
    onClick={onClick}
    className="transform transition-transform duration-500 ease-in-out hover:rotate-45">
    <Image src={icon} alt="Profile" width={20} height={20} />
  </button>
);

export default IconButton;
