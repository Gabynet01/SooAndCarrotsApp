import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RoundIcon } from "../components/RoundIcons";
import AppInput from "../components/AppInput";
import Dropdown from "../components/Dropdown";
import ErrorMessage from "../components/ErrorMessage";
import AppCheckbox from "../components/AppCheckbox";
import AppButton from "../components/AppButton";

const SignUpScreen = () => {
  const [formValues, setFormValues] = useState({
    competition: "",
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    agreeTerms: false,
  });

  const handleInputChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  const handleSignUp = () => {
    console.log("Form values:", formValues);
    // Perform signup logic here (e.g., API call)
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <RoundIcon
            name={"arrow-left"}
            size={24}
            color={"gray"}
            style={{ marginEnd: 10 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Create Account
          </Text>
        </View>

        <View>
          <View style={{ marginBottom: 20 }}>
            <Dropdown
              placeholder={"Competition to sign up*"}
              options={["Option 1", "Option 2", "Option 3"]}
              onSelect={(option) => handleInputChange("competition", option)}
              style={{ marginBottom: 5 }}
            />
            <ErrorMessage>You must pick a competition to register</ErrorMessage>
          </View>

          <View style={{ marginBottom: 20, zIndex: -1 }}>
            <AppInput
              placeholder={"Email"}
              value={formValues.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
            <ErrorMessage>Email format is invalid</ErrorMessage>
          </View>

          <View
            style={{
              marginBottom: 20,
              zIndex: -1,

              borderRadius: 15,
            }}
          >
            <View style={{ backgroundColor: "#F9FAFB", borderRadius: 15 }}>
              <AppInput
                secureTextEntry
                placeholder={"Password"}
                icon={"eye-off-outline"}
                value={formValues.password}
                onChangeText={(text) => handleInputChange("password", text)}
              />
              <AppInput
                secureTextEntry
                placeholder={"Password Confirm"}
                icon={"eye-off-outline"}
                value={formValues.passwordConfirm}
                onChangeText={(text) =>
                  handleInputChange("passwordConfirm", text)
                }
              />
            </View>
            <ErrorMessage>{"\u2713"} At least 8 letters</ErrorMessage>
            <ErrorMessage>
              {"\u2713"} Include at least 3 uppercase letters, lowercase
              letters, number, or special letters
            </ErrorMessage>
            <ErrorMessage>
              Special letters are only limited to (~`!@#$%^&*()_-+=?)
            </ErrorMessage>
            <ErrorMessage>
              New password and Confirm password do not match.
            </ErrorMessage>
          </View>

          <View style={{ marginBottom: 20 }}>
            <AppInput
              placeholder={"First Name in English*"}
              value={formValues.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
            />
            <ErrorMessage>This is a required field.</ErrorMessage>
          </View>

          <View style={{ marginBottom: 20 }}>
            <AppInput
              placeholder={"Last Name in English*"}
              value={formValues.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
            />
            <ErrorMessage>This is a required field.</ErrorMessage>
          </View>

          <View style={{ marginBottom: 20 }}>
            <AppCheckbox
              style={{ color: "gray" }}
              checked={formValues.agreeTerms}
              onChange={(checked) => handleInputChange("agreeTerms", checked)}
            >
              By signing up, I agree to Cloit's Terms & Conditions and Privacy
              Policy.
            </AppCheckbox>
          </View>

          <AppButton
            text={"Sign Up"}
            containerStyle={{ backgroundColor: "#253BFF" }}
            textStyle={{ color: "white" }}
            onPress={handleSignUp}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
});

export default SignUpScreen;
