import type { Meta, StoryObj } from "@storybook/react";
import FullStack from "./FullStack";

const meta: Meta<typeof FullStack> = {
  title: "FullStack",
  component: FullStack,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FullStack>;

export const LoggedIn: Story = {
  args: {
    // これ効いていない
    numNumber: 42,
    copyToClipboard: (value: number) => {
      // hoge
    },
  },
};

export const LoggedOut: Story = {};
