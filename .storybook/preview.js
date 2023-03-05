import 'material-icons/iconfont/material-icons.css';
import '../src/styles/styles.scss';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
		sort: 'requiredFirst',
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: 'centered',
	viewMode: 'docs',
	backgrounds: {
		default: 'dark',
		values: [
			{
				name: 'dark',
				value: '#F5F6F8',
			},
		],
	},
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
};
