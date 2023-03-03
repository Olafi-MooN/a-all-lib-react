import React from "react";
import { Meta, Story } from "@storybook/react";
import { AllButton } from "../../../../src/components/buttons/v1/button.v1";
import { IAllButtonConfigV1Props, IAllButtonV1Props } from "../../../../src/components/buttons/v1/button.v1.interface";

const Template: Story<IAllButtonV1Props> = (args) => <AllButton {...args}>Button</AllButton>;

export const Default = Template.bind({});
Default.args = {
	configStyle: {
		bg_color: "PRIMARY",
		radius: "1",
		size: "MEDIUM",
		color: "WHITE",
	} as IAllButtonConfigV1Props,
};

const meta: Meta = {
	title: "components/buttons/v1",
	component: AllButton,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
		viewMode: "docs",
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	configStyle: {
		bg_color: "primary",
		size: "large",
		radius: "1",
		color: "white",
	},
};

export const Archived = Template.bind({});
Archived.args = {
	configStyle: {
		bg_color: "primary",
		size: "large",
		radius: "1",
		color: "white",
	},
};

export default meta;
