import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RoundIcon } from "../components/RoundIcons";

const SignUpDoneScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 15,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <RoundIcon
              name={"flare"}
              color={"white"}
              style={{ backgroundColor: "blue", borderWidth: 0 }}
            />
            <RoundIcon name={"close"} color={"gray"} size={20} />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>
            Welcome to Soo
          </Text>
          <Text style={{ paddingBottom: 50 }}>Great to have you with us!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SignUpDoneScreen;
