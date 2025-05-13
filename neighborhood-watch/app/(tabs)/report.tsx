import { View, Text, StyleSheet } from "react-native";

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report an Incident</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
});
// This is a placeholder for the report screen.
// In a real application, this screen would contain a form for users to report incidents.
// The form would include fields for the type of incident, location, description, and any other relevant details.
