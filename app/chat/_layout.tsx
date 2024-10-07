import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Slot } from "expo-router";

type Props = {};

const ChatPageLayout = ({}: Props) => {
  return (
    <Stack
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default ChatPageLayout;

const styles = StyleSheet.create({});
