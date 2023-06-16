import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { ButtonProps } from '@/components/buttons/types';

const StyledButton = styled.button``;

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  ...res
}) => {
  return (
    <StyledButton
      {...res}
      className={clsxm(
        'button inline-flex items-center justify-center rounded-[4px] border-[1px] border-[red] px-[4px] py-[2px] font-semibold',
        'focus-visible:ring-primary-500 hover:border-[blue] focus:outline-none focus-visible:ring',
        'transition duration-100',
        variant === 'primary' && [
          'text-primary-500 hover:text-primary-600 active:text-primary-700',
          'disabled:text-primary-200',
        ],
        variant === 'basic' && [
          'text-black hover:text-gray-600 active:text-gray-800',
          'disabled:text-gray-300',
        ]
      )}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
