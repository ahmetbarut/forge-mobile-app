import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useApi from "../useApi";

const Table = () => {
  const [events, setEvents] = React.useState([]);
  function fetchData() {
    useApi({ method: "GET", uri: "servers/events" }).then((response) => {
      setEvents(response);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const renderRow = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#ffffff";

    return (
      <View style={[styles.row, { backgroundColor }]}>
        <Text style={styles.cell}>{item.server_name}</Text>
        <Text style={styles.cell}>{item.description}</Text>
        <Text style={styles.cell}>{item.created_at}</Text>
        <Text style={styles.cell}>{item.id}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={events}
      renderItem={renderRow}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ flexGrow: 1, marginBottom: -50 }}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.headerCell}>Sunucu</Text>
          <Text style={styles.headerCell}>Açıklama</Text>
          <Text style={styles.headerCell}>Ne zaman</Text>
          <Text style={styles.headerCell}>İşlem</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  table: {
    backgroundColor: "#ffffff",
    elevation: 5, // Gölgeli efekt
    borderRadius: 5,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "left", // Hücre içeriğini sola hizala
  },
});

export default Table;
