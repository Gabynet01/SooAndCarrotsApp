import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you are using Expo for vector icons

const AppCheckbox = ({ children, onChange, initialValue = false, style }) => {
  const [checked, setChecked] = useState(initialValue);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggle}>
      <MaterialIcons
        name={checked ? "check-box" : "check-box-outline-blank"}
        size={24}
        color={checked ? "#0066FF" : "#757575"}
      />
      <Text style={[styles.label, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 14,
  },
});

export default AppCheckbox;
