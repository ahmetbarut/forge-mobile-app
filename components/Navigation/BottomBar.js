import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

export default function BottomBar() {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Type a message..." />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: '20px',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: '10px',
    paddingHorizontal: '20px',
    borderRadius: '20px',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

