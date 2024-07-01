import AppCheckbox from "../AppCheckbox";

export default {
  title: "AppCheckbox",
  component: AppCheckbox,
  argTypes: { onChange: { action: "onChange" } },
};

export const Default = {
  args: { Children: "Click me" },
};

export const Enabled = {
  args: { ...Default.args, initialValue: true },
};

export const Disabled = {
  args: { ...Default.args, initialValue: false },
};

// children, onChange
