module.exports = {
	stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
	addons: ['@storybook/preset-scss', '@storybook/addon-links', '@storybook/addon-essentials'],
	typescript: {
		check: true,
	},
};
