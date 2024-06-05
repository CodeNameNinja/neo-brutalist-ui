import type { Meta, StoryObj } from '@storybook/react';
import { NbUiWeb } from './nb-ui-web';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NbUiWeb> = {
  component: NbUiWeb,
  title: 'NbUiWeb',
};
export default meta;
type Story = StoryObj<typeof NbUiWeb>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NbUiWeb!/gi)).toBeTruthy();
  },
};
