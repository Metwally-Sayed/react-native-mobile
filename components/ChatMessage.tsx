import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  id: number;
  senderId: number;
  chatId: number;
  timestamp: number;
  message?: string;
  image?: string;
  user: number;
  resever: number | undefined;
};

const ChatMessage = ({
  id,
  senderId,
  chatId,
  timestamp,
  message,
  user,
  image,
  resever,
}: Props) => {
  return (
    <View
      style={{
        ...styles.BubbleContainer,
        backgroundColor: senderId === user ? "#179CDE" : "#333333",
        alignSelf: senderId === user ? "flex-end" : "flex-start",
      }}
    >
      {message ? <Text style={styles.textMessage}>{message}</Text> : null}

      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.imageMessage}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  BubbleContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    width: "auto",
    maxWidth: 280,
  },
  textMessage: {
    color: "white",
  },
  imageMessage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
