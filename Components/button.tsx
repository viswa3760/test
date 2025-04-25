import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean; // Added disabled prop to handle disabling the button
};

export const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled} // Disabling the button based on the disabled prop
      className={clsx(
        'w-full py-3 rounded-[6px] font-semibold transition',
        {
          'bg-indigo-600 text-white hover:bg-indigo-700': variant === 'primary',
          'bg-[#6C25FF4B] text-black hover:bg-indigo-400': variant === 'secondary',
          'opacity-50 cursor-not-allowed': disabled, // Adding styles for the disabled state
        }
      )}
    >
      {text}
    </button>
  );
};
