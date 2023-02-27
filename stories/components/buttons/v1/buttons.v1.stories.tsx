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
  <AllButton {...args}>Button</AllButton>
);

export const ButtonPrimary = Template.bind({});

ButtonPrimary.args = {
  configStyle: {
    bg_color: "dark",
    size: "large",
  },
} as IAllButtonV1Props;

export const ButtonPrimary2 = Template.bind({});
ButtonPrimary2.args = {
  configStyle: {
    bg_color: "primary",
    size: "large",
  },
} as IAllButtonV1Props;
