import type { Meta, StoryObj } from '@storybook/react';

import Icons from './Icons';

const meta: Meta<typeof Icons> = {
  title: 'Atom/Icons',
  component: Icons,
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Ellipse: Story = {
  args: {
    typeIcon: 'ellipse',
    stroke: 'red',
  },
};

export const Union: Story = {
  args: {
    typeIcon: 'union',
    fill: 'red',
  },
};
