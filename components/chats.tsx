import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { User } from "@/assets/dummydata";
import { Link } from "expo-router";

type Props = {
  resever: User | undefined;
  lastMessage: string;
};

const Chats = ({ resever, lastMessage }: Props) => {
  return (
    <Link
      href={{
        pathname: "/chat/[id]",
        params: { id: resever!.id.toString() },
      }}
    >
      <View style={styles.container}>
        <View style={styles.ChatCard}>
          <View style={styles.ChatCardContent}>
            <Image
              style={styles.userImage}
              source={require("../assets/images/userimg.png")}
            />
            <View style={styles.ChatCardContentText}>
              <Text style={styles.userNameText}>{resever?.name}</Text>
              <Text style={styles.chatText}>{lastMessage}</Text>
            </View>
          </View>
          <Text style={styles.chatText}>
            <AntDesign name="right" size={15} color="white" />
          </Text>
        </View>
      </View>
    </Link>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  ChatCard: {
    height: 80,
    borderBottomColor: "#808080",
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  ChatCardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: { width: 50, height: 50, borderRadius: 50 },
  ChatCardContentText: {
    flexDirection: "column",
  },
  chatText: {
    color: "#606770",
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 30,
  },
  userNameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 30,
    textTransform: "capitalize",
  },
});
