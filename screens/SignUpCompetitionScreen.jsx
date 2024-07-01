import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RoundIcon } from "../components/RoundIcons";
import AppInput from "../components/AppInput";
import CompetitionCard from "../components/CompetitionCard";

const SignUpCompetitionScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
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
          <AppInput
            placeholder={"Search..."}
            icon={"magnify"}
            style={{ flexGrow: 1 }}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 10 }}>
            Competition
          </Text>
          <Text style={{ color: "#344054" }}>
            An account is needed per one host. If you already have an account
            for the host of competition you want to sign up, you can login and
            register.
          </Text>
        </View>

        <View>
          <CompetitionCard
            title={"20th Asian Game - Achi Nagoya 2026 (Winter)"}
            date={"YYYY-MM-DD ~ YYYY-MM-DD"}
            location={"Pyeongchang, Gangwon-do, Korea"}
            containerStyle={{ marginBottom: 15 }}
          />
          <CompetitionCard
            title={"20th Asian Game - Achi Nagoya 2026 (Winter)"}
            date={"YYYY-MM-DD ~ YYYY-MM-DD"}
            location={"Pyeongchang, Gangwon-do, Korea"}
            containerStyle={{ marginBottom: 15 }}
          />
          <CompetitionCard
            title={"20th Asian Game - Achi Nagoya 2026 (Winter)"}
            date={"YYYY-MM-DD ~ YYYY-MM-DD"}
            location={"Pyeongchang, Gangwon-do, Korea"}
            containerStyle={{ marginBottom: 15 }}
          />
          <CompetitionCard
            title={"20th Asian Game - Achi Nagoya 2026 (Winter)"}
            date={"YYYY-MM-DD ~ YYYY-MM-DD"}
            location={"Pyeongchang, Gangwon-do, Korea"}
            containerStyle={{ marginBottom: 15 }}
          />
          <CompetitionCard
            title={"20th Asian Game - Achi Nagoya 2026 (Winter)"}
            date={"YYYY-MM-DD ~ YYYY-MM-DD"}
            location={"Pyeongchang, Gangwon-do, Korea"}
            containerStyle={{ marginBottom: 15 }}
          />
          <CompetitionCard
            title={"20th Asian Game - Achi Nagoya 2026 (Winter)"}
            date={"YYYY-MM-DD ~ YYYY-MM-DD"}
            location={"Pyeongchang, Gangwon-do, Korea"}
            containerStyle={{ marginBottom: 15 }}
          />
        </View>

        <View></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SignUpCompetitionScreen;
