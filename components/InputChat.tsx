import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import Model from "./Model";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
type Props = {
  text: string;
  imageUri?: string;
  setImageUri: React.Dispatch<React.SetStateAction<string | undefined>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  sendMessageHandler: (condition: string) => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputChat = ({
  text,
  imageUri,
  setText,
  setImageUri,
  sendMessageHandler,
  modalVisible,
  setModalVisible,
}: Props) => {
  const inputHandler = (newText: string) => {
    setText(newText);
    console.log(newText);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
    });
    console.log(result);
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      type: "*/*",
    });
    console.log(result);
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.InputContainer}>
      <View style={{ alignItems: "center", flexDirection: "row", gap: 10 }}>
        <TouchableOpacity>
          <AntDesign
            name="plus"
            size={24}
            color="white"
            onPress={() => setModalVisible(true)}
          />
        </TouchableOpacity>
        <TextInput
          multiline={true}
          maxFontSizeMultiplier={1.5}
          inputMode="text"
          enterKeyHint="send"
          onChangeText={(textMessage) => inputHandler(textMessage)}
          value={text}
          autoCorrect={false}
          style={{
            borderWidth: 1,
            backgroundColor: "black",
            width: "80%",
            borderRadius: 20,
            padding: 10,
            color: "white",
            minHeight: 35,
          }}
          placeholder="Type a message"
        />
        <Text style={{ color: "white" }}>
          {text.length > 0 || imageUri?.length! > 0 ? (
            <TouchableOpacity>
              <MaterialIcons
                onPress={() => sendMessageHandler("normal")}
                name="send"
                onLongPress={() => sendMessageHandler("long")}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Feather name="mic" size={24} color="white" />
            </TouchableOpacity>
          )}
        </Text>
      </View>
      <Model
        title={"Choose a media"}
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        {imageUri ? (
          <View
            style={{
              alignItems: "center",
              flexDirection: "column",
              padding: 20,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              style={styles.imageMessage}
              source={{ uri: imageUri }}
              resizeMode="contain"
            />
            <TouchableOpacity>
              <MaterialIcons
                onPress={() => sendMessageHandler("normal")}
                name="send"
                onLongPress={() => sendMessageHandler("long")}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              gap: 30,
              flexDirection: "row",
              padding: 40,
              justifyContent: "space-evenly",
              width: "100%",
              height: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 50,
                width: 50,
                height: 50,
                borderWidth: 1,
                backgroundColor: "#000000",
              }}
              onPress={pickImage}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                <Octicons name="image" size={30} color="white" />{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 50,
                width: 50,
                height: 50,
                borderWidth: 1,
                backgroundColor: "#000000",
              }}
              onPress={pickImage}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                <Octicons name="video" size={30} color="white" />{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 50,
                width: 50,
                height: 50,
                borderWidth: 1,
                backgroundColor: "#000000",
              }}
              onPress={pickDocument}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                <Octicons name="file" size={30} color="white" />{" "}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Model>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  InputContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    height: 66,
    backgroundColor: "#333333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  imageMessage: {
    width: 200,
    height: 200,
  },
});
