import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppInput = ({
  style,
  icon,
  placeholder,
  value,
  defaultValue,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        style={styles.input}
        underlineColorAndroid={"transparent"}
        value={value}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {icon && <MaterialCommunityIcons name={icon} size={24} color="gray" />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
  },
  input: {
    flex: 1,
  },
});

export default AppInput;
