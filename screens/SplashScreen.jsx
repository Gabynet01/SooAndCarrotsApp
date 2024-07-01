import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash_image.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View>
          <Text style={styles.headerText}>Soo</Text>
          <Text style={styles.headerText}>and Carrots</Text>
        </View>

        <LinearGradient
          colors={["rgba(0,0,0,0)", "black"]}
          style={styles.buttonContainer}
        >
          <AppButton
            iconLeft={"logout"}
            iconRight={"arrow-right"}
            text={"Sign up for free"}
            containerStyle={{ backgroundColor: "#253BFF" }}
            textStyle={{ color: "white" }}
            leftIconStyle={{ borderWidth: 0 }}
          />
          <AppButton
            iconLeft={"email-outline"}
            iconRight={"arrow-right"}
            text={"Continue with Email"}
            containerStyle={{ backgroundColor: "#1D2939" }}
            textStyle={{ color: "white" }}
            leftIconStyle={{ borderWidth: 0 }}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingStart: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#253BFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: "#1D2939",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});

export default SplashScreen;
