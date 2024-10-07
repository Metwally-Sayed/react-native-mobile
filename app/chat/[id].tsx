import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import ChatHeader from "@/components/ChatHeader";
import {
  getChat,
  getChatMessages,
  getUser,
  Message,
  User,
  USERS_DATA,
} from "@/assets/dummydata";
import ChatMessage from "@/components/ChatMessage";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import InputChat from "@/components/InputChat";

type Props = {};

const ChatPage = (props: Props) => {
  const user = USERS_DATA;
  const { id } = useLocalSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [resever, setResever] = useState<User>();
  const [text, setText] = useState<string>("");
  const [imageUri, setImageUri] = useState<string | undefined>();
  const [fileUrl, setFileUrl] = useState<string | undefined>("");
  const [videoUrl, setVideoUrl] = useState<string | undefined>();
  const [modalVisible, setModalVisible] = useState(false);

  const keyboard = useAnimatedKeyboard();
  const scrollViewRef = useRef<ScrollView>(null);

  const translateStyle = useAnimatedStyle(() => {
    return {
      height: keyboard.height.value,
    };
  });

  useEffect(() => {
    const chatData = getChat(+id);
    console.log(chatData, "chat");
    if (chatData) {
      const chatMessages = getChatMessages(chatData?.id);
      setMessages(chatMessages);

      for (let i = 0; i < chatData.users.length; i++) {
        const element = chatData.users[i];
        if (element !== user) {
          const res = getUser(element);
          setResever(res);
        }
      }
    }
  }, []);

  console.log(messages, "messages");

  const sendMessageHandler = (condition: string): void => {
    if (condition === "long") {
      setMessages((prev) => [
        ...prev,
        {
          id: 1,
          text: text.trim(),
          senderId: resever?.id!,
          chatId: +id,
          timestamp: Date.now(),
          image: imageUri,
          file: fileUrl,
          video: videoUrl,
        },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: 1,
          text: text.trim(),
          senderId: user,
          chatId: +id,
          timestamp: Date.now(),
          image: imageUri,
          file: fileUrl,
          video: videoUrl,
        },
      ]);
    }
    setText("");
    setImageUri("");
    setFileUrl("");
    setVideoUrl("");
    scrollViewRef?.current?.scrollToEnd({ animated: true });
    setModalVisible(false);
  };

  return (
    <>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <ChatHeader username={resever?.name} />
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            onContentSizeChange={() =>
              scrollViewRef?.current?.scrollToEnd({ animated: true }) ?? null
            }
            ref={scrollViewRef}
          >
            {messages.map((message, index) => (
              <ChatMessage
                message={message.text}
                image={message.image!}
                key={index}
                user={user}
                resever={resever?.id}
                {...message}
              />
            ))}
          </ScrollView>
        </View>
        <Animated.View>
          <InputChat
            text={text}
            setText={setText}
            imageUri={imageUri}
            setImageUri={setImageUri}
            sendMessageHandler={sendMessageHandler}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </Animated.View>
        <Animated.View style={translateStyle}></Animated.View>
      </View>
    </>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  InputContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 10,
    height: 80,
    backgroundColor: "#333333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
