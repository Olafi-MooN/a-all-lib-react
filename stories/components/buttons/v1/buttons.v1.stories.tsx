import React from "react";
import { Meta, Story } from "@storybook/react";
import { AllButton } from "../../../../src/a-all/components/buttons/v1/button.v1";
import { IAllButtonV1Props } from "../../../../src/a-all/components/buttons/v1/button.v1.interface";

const meta: Meta = {
  title: "components/buttons/v1",
  component: AllButton,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IAllButtonV1Props> = (args) => (
  <AllButton {...args}>Text</AllButton>
);

export const ButtonV1 = Template.bind({});

ButtonV1.args = {};
