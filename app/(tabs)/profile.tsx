import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0a7ea4",
  },
});
