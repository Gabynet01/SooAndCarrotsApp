import { Image, Text, TouchableOpacity } from "react-native";

const CompetitionCard = ({ title, date, location, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "#253BFF",
          padding: 20,
          borderRadius: 10,
          position: "relative",
          overflow: "hidden",
        },
        containerStyle,
      ]}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      <Text style={{ color: "white", marginBottom: 10 }}>{date}</Text>
      <Text style={{ color: "#B8BFFF", fontWeight: "100" }}>{location}</Text>
      <Image
        style={{
          position: "absolute",
          bottom: -5,
          right: -10,
          opacity: 0.2,
        }}
        source={require("../assets/watermark.png")}
      />
    </TouchableOpacity>
  );
};

export default CompetitionCard;
