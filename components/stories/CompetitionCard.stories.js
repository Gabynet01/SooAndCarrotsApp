import CompetitionCard from "../CompetitionCard";

export default {
  title: "CompetitionCard",
  component: CompetitionCard,
  argTypes: {},
};

export const Default = {
  args: { title: "Title", date: "dd/mm/yyyy", location: "Somewhere, London" },
};

// title, date, location, containerStyle
