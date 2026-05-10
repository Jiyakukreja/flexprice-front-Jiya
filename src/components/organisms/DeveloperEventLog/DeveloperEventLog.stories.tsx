// DeveloperEventLog.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';

import DeveloperEventLog from './DeveloperEventLog';

const meta: Meta<typeof DeveloperEventLog> = {
	title: 'Organisms/DeveloperEventLog',

	component: DeveloperEventLog,

	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof DeveloperEventLog>;

export const Default: Story = {};
