import React from "react";

import { NarrowSidebar } from "../../../../confetti-ds/src";
const { Footer: Component } = NarrowSidebar;

export default {
  title: "Navigation/Sidebar/Narrow Subcomponents/Footer",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Footer = (args) => <Component {...args} />;
