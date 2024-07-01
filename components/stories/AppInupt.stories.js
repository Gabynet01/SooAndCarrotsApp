import AppInput from "../AppInput";

export default {
  title: "AppInput",
  component: AppInput,
  argTypes: {},
};

export const Default = {
  args: { placeholder: "Type here..." },
};

export const WithIcon = {
  args: { ...Default.args, icon: "magnify" },
};

// icon, placeholder
