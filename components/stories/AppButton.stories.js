import AppButton from "../AppButton";

export default {
  title: "AppButton",
  component: AppButton,
  argTypes: {},
};

export const Default = {
  args: { text: "Click me" },
};

export const WithLeftIcon = {
  args: { ...Default.args, iconLeft: "arrow-left" },
};

export const WithRightIcon = {
  args: { ...Default.args, iconRight: "arrow-right" },
};

export const WithTwoIcons = {
  args: { ...Default.args, iconLeft: "arrow-left", iconRight: "arrow-right" },
};

// text,
//   iconLeft,
//   iconRight,
//   align = "center",
//   onPress,
//   containerStyle,
//   textStyle,
