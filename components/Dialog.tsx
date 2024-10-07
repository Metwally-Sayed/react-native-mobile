import { Button, StyleSheet, Text, View, } from "react-native";
import React, { useState } from "react";
type Props = {};

const Dialog = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleConfirm = () => {
    setVisible(false);
    // Handle confirmation logic here
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Dialog" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Description>
          This is a simple dialog. Do you confirm this action?
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Confirm" onPress={handleConfirm} />
      </Dialog.Container>
    </View>
  );
};

export default Dialog;

const styles = StyleSheet.create({});
