import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Assuming you are using Expo for vector icons
import { RoundIcon } from "./RoundIcons";

const AppButton = ({
  text,
  iconLeft,
  iconRight,
  align = "center",
  onPress,
  containerStyle,
  textStyle,
  leftIconStyle,
  rightIconStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      {iconLeft && (
        // <MaterialCommunityIcons
        //   name={iconLeft}
        //   size={24}
        //   color={textStyle.color || "black"}
        //   style={styles.icon}
        // />
        <RoundIcon
          name={iconLeft}
          color={textStyle?.color || "black"}
          size={20}
          style={leftIconStyle}
        />
      )}
      <View
        style={[
          styles.textContainer,
          {
            justifyContent:
              align === "left"
                ? "flex-start"
                : align === "right"
                ? "flex-end"
                : "center",
          },
        ]}
      >
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </View>
      {iconRight && (
        // <MaterialCommunityIcons
        //   name={iconRight}
        //   size={24}
        //   color={textStyle.color || "black"}
        //   style={styles.icon}
        // />
        <RoundIcon
          name={iconRight}
          color={textStyle?.color || "black"}
          size={20}
          style={rightIconStyle}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    paddingStart: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AppButton;
