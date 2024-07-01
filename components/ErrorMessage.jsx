import React from "react";
import { Text } from "react-native";

const ErrorMessage = ({ style, children }) => {
  return <Text style={[{ color: "red", zIndex: -1 }, style]}>{children}</Text>;
};

export default ErrorMessage;
