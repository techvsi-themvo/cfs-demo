import React from 'react';

import { IconProps } from '@/components/atoms/icons/types';

export default function Icons(props: IconProps) {
  const { typeIcon, fill, stroke } = props;
  return (
    <>
      {typeIcon === 'ellipse' && (
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill={fill || 'none'}
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <circle
            cx='7'
            cy='7'
            r='6'
            stroke={stroke || '#F9F9F9'}
            stroke-width='1.5'
            stroke-linecap='round'
            {...props}
          />
        </svg>
      )}

      {typeIcon === 'union' && (
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          fill={fill || 'none'}
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z'
            fill={fill || 'white'}
            {...props}
          />
        </svg>
      )}
    </>
  );
}
