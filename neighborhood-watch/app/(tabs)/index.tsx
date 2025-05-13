import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welome to the Neighborhood watch Feed</Text>
      <p>welcome all to kempton </p>
      <img src="assets\images\splash-icon.png" alt="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
});
