import React from 'react';

type Props = {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  ariaLabel?: string;
  label?: string;
  error?: boolean;
  errorText?: string;
};

const Input: React.FC<Props> = ({
  name,
  value,
  onChange,
  placeholder = 'Type here',
  type = 'text',
  label,
  ariaLabel,
  error,
  errorText,
  ...props
}) => (
  <div>
    <p>
      <label htmlFor={name}>{label}</label>
    </p>
    <input
      id={name}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      aria-invalid={error}
      aria-describedby={`${name}-error`}
      placeholder={placeholder}
      aria-label={ariaLabel}
      {...props}
      className="input input-bordered input-accent mt-2 w-full max-w-xs"
    />
    <p className="text-red-500">
      {error ? errorText || 'field is mandatory' : null}
    </p>
  </div>
);

export default Input;
