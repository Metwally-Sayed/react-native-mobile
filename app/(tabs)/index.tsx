import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Chats from "@/components/chats";
import {
  Chat,
  getChatMessages,
  getUser,
  getUserChats,
  Message,
  User,
  USERS_DATA,
} from "@/assets/dummydata";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [userChats, setUserChats] = useState<Chat[]>([]);
  const [reseverData, setReseverData] = useState<User[]>([]);
  const [mess, setMess] = useState<string[]>([]);

  useEffect(() => {
    const chats = getUserChats(USERS_DATA);
    for (let i = 0; i < chats.length; i++) {
      const chat = chats[i];
      const messages = getChatMessages(chat.id);
      setMess((prev) => [...prev, messages[i].text!]);
      for (let j = 0; j < chat.users.length; j++) {
        const user = chat.users[j];
        if (user !== USERS_DATA) {
          const userData = getUser(user);
          if (userData) {
            setReseverData((prev) => [...prev, userData]);
          }
        }
      }
    }
    setUserChats(chats);
    console.log(chats);
  }, []);

  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit{" "}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
    //       to see changes. Press{" "}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
    //       </ThemedText>{" "}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this
    //       starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{" "}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
    //       to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
    //       directory. This will move the current{" "}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
    <>
      <SafeAreaView style={styles.stepContainer}>
        <Text style={styles.header}>Chat</Text>
        <ScrollView style={{ height: "100%" }}>
          {userChats.map((chat, idx) => (
            <Chats
              key={chat.id}
              {...chat}
              resever={reseverData[idx]}
              lastMessage={mess[idx]}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    color: "#ffffff",
    padding: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
