import 'material-icons/iconfont/material-icons.css';
import '../src/styles/colors.css';
import '../src/styles/fonts.css';
import '../src/styles/global.css';

import { addParameters } from '@storybook/client-api';

addParameters({
	controls: {
		expanded: true,
		sort: 'requiredFirst',
	},
	viewMode: 'docs',
	previewTabs: {
		'storybook/docs/panel': {
			index: -1,
		},
		canvas: { title: 'Sandbox' },
	},
	options: {
		storySort: {
			order: ['Welcome', 'Global Styles', 'components'],
		},
	},
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: 'centered',
	backgrounds: {
		default: 'dark',
		values: [
			{
				name: 'dark',
				value: '#F5F6F8',
			},
		],
	},
};
