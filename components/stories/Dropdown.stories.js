import Dropdown from "../Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    onSelect: { action: "option selected" },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  placeholder: "Select an option",
};

export const Opened = Template.bind({});
Opened.args = {
  ...Default.args,
  options: ["Option 1", "Option 2", "Option 3"],
  selectedOption: "Option 2",
  showOptions: true,
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  options: ["Option 1", "Option 2", "Option 3"],
  selectedOption: "Option 2",
};
