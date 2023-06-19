import { SVGAttributes } from 'react';

export type IconProps = {
  typeIcon: string;
  fill?: string;
  stroke?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & SVGAttributes<any>;
