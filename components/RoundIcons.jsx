import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
// import { styles } from './styles';

export const RoundIcon = ({ name, size, color = "gray", style }) => {
  return (
    <View style={[styles.roundIconContainer, { borderColor: color }, style]}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  roundIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20, // half of the width and height for a round shape
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
});
