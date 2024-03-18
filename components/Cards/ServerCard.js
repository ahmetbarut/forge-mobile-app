import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ServerCard = ({ logo, name, features, ipAddress, isConnected, serverId }) => {
  const navigation = useNavigation();

  function goScreen(serverId) {
    navigation.navigate("Server", { serverId });
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name={logo} size={40} color="#007BFF" />
        <Button onPress={() => goScreen(serverId)} title={name} />
      </View>
      <Text style={styles.model}>{features.join(", ")}</Text>
      <View style={styles.ipContainer}>
        <Text style={styles.ip}>{ipAddress}</Text>
        <TouchableOpacity onPress={() => alert("IP copied to clipboard")}>
          <Ionicons name="copy" size={24} color="#007BFF" />
        </TouchableOpacity>
      </View>
      <Text style={[styles.status, { color: isConnected ? "green" : "red" }]}>
        {isConnected ? "Bağlandı" : "Bağlantı Kurulamadı"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "100%", // Set the height to 1/3 of the parent container
    backgroundColor: "#ffffff",
    width: 300,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  model: {
    fontSize: 16,
    marginBottom: 5,
  },
  ipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  ip: {
    flex: 1,
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ServerCard;
