import React from 'react';

import { Meta, Story } from '@storybook/react';

import { AllButton } from '../../../../src/components/buttons/v1/button.v1';

import { IAllButtonConfigV1Props, IAllButtonV1Props } from '../../../../src/components/buttons/v1/button.v1.interface';

const Template: Story<IAllButtonV1Props> = (args) => <AllButton {...args}>Button</AllButton>;

export const Primary = Template.bind({});

Primary.args = {
	configStyle: {
		bg_color: 'PRIMARY',
		radius: '1',
		size: 'MEDIUM',
		color: 'WHITE',
	} as IAllButtonConfigV1Props,
};

const meta: Meta = {
	title: 'components/buttons/v1',

	component: AllButton,

	argTypes: {},

	parameters: {
		controls: { expanded: true },

		viewMode: 'docs',
	},
};

export const Positive = Template.bind({});

Positive.args = {
	configStyle: {
		bg_color: 'POSITIVE',

		size: 'LARGE',

		radius: '2',

		color: 'WHITE',
	} as IAllButtonConfigV1Props,
};

export const Dark = Template.bind({});

Dark.args = {
	configStyle: {
		bg_color: 'DARK',

		size: 'MEDIUM',

		radius: '2',

		color: 'WHITE',
	} as IAllButtonConfigV1Props,
};

export default meta;
