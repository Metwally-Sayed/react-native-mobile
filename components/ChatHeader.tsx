import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

type Props = {
  username: string | undefined;
};

const ChatHeader = ({ username }: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Link href="/">
          <Text style={{ color: "white" }}>
            <AntDesign name="left" size={24} color="white" />
          </Text>
        </Link>
        <View>
          <Text style={{ color: "white" }}>{username}</Text>
        </View>
        <View>
          <Text>
            <Image
              style={styles.userImage}
              source={require("../assets/images/userimg.png")}
            />{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: "#333333",
    justifyContent: "flex-end",
  },
  userImage: { width: 40, height: 40, borderRadius: 50 },
  ChatCardContentText: {
    flexDirection: "column",
  },
});
