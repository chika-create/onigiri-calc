import type { Meta, StoryObj } from "@storybook/react";
import AlignmentNumBlue from "./AlignmentNumBlue";

const meta: Meta<typeof AlignmentNumBlue> = {
  title: "parts/initialSetting/AlignmentNumBlue",
  component: AlignmentNumBlue,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AlignmentNumBlue>;

export const LoggedIn: Story = {
  args: {
    // hoge
  },
};
