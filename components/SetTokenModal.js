import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SetTokenModal({ visible, handleVisibleModal }) {
  const [token, setToken] = React.useState("");
  const handleToken = () => {
    AsyncStorage.setItem("token", token);
    handleVisibleModal(false);
  };

  return (
    <Modal
      style={styles.modalContent}
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalContainer}>
        <Text style={{ color: "red", fontSize: 18, fontWeight: "600" }}>
          Tokeniniz geçerli değil, yeni token giriniz
        </Text>
        <TextInput
          editable
          onChangeText={(text) => setToken(text)}
          multiline
          numberOfLines={8}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleToken}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Arka plana opaklık eklemek için
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    width: "80%",
    height: 100,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 20,
    borderRadius: 5,
    fontWeight: "600",
    alignItems: "center",
    width: "80%",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
