import '../src/index.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#EEF4F8' },
				{ name: 'dark', value: '#080B14' },
				{ name: 'white', value: '#ffffff' },
			],
		},
	},
};

export default preview;
