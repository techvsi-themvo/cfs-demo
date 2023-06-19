import * as React from 'react';
import { styled } from 'styled-components';

import clsxm from '@/lib/clsxm';

import { ButtonProps } from '@/components/atoms/buttons/types';
import Icons from '@/components/atoms/icons/Icons';

import themes from '@/styles/themes';

const StyledButton = styled.button<{ disabled: boolean; variant: string }>`
  &:hover .icon-ellipse {
    stroke: ${({ variant, disabled }) =>
      disabled ? '' : variant === 'secondary' ? themes.primary.magenta : ''};
  }
  &:hover .icon-union {
    fill: ${({ variant, disabled }) =>
      disabled ? '' : variant === 'secondary' ? themes.primary.magenta : ''};
  }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      disabled,
      isShowIconLeft = true,
      isShowIconRight = true,
      children,
      ...res
    },
    ref
  ) => {
    return (
      <StyledButton
        className={clsxm(
          'flex h-[48px] w-fit items-center rounded-[40px] pl-[30px] pr-[32px] text-[16px] font-[700] leading-[24px] transition-all duration-[0.2s] ',
          variant === 'primary' && [
            'bg-primary-magenta hover:bg-primary-magenta_hover text-white',

            disabled && [
              'bg-neutral-100 text-neutral-200 hover:bg-neutral-100',
            ],
          ],
          variant === 'secondary' && [
            'border-primary-magenta text-primary-magenta hover:text-primary-magenta_hover hover:border-primary-magenta_hover border-[1px] border-solid bg-white',
            disabled && [
              'border-text-neutral-200 hover:border-text-neutral-200 text-neutral-200 hover:text-neutral-200',
            ],
          ]
        )}
        ref={ref}
        disabled={!!disabled}
        variant={variant}
        {...res}
      >
        {isShowIconLeft && (
          <Icons
            typeIcon='ellipse'
            className={clsxm('mr-[14px]', 'icon-ellipse')}
            stroke={
              disabled
                ? themes.neutral[200]
                : variant === 'secondary'
                ? themes.primary.magenta
                : themes.neutral[50]
            }
          />
        )}
        {children}
        {isShowIconRight && (
          <Icons
            typeIcon='union'
            className={clsxm('ml-[18px]', 'icon-union')}
            fill={
              disabled
                ? themes.neutral[200]
                : variant === 'secondary'
                ? themes.primary.magenta
                : themes.neutral[50]
            }
          />
        )}
      </StyledButton>
    );
  }
);

export default Button;
