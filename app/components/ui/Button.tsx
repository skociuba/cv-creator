import React from 'react';
type Props = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset';
};
const Button: React.FC<Props> = ({children, onClick, type = 'button'}) => (
  <button
    type={type}
    onClick={onClick}
    className="btn btn-accent btn-outline mb-2 w-full max-w-xs">
    {children}
  </button>
);

export default Button;
