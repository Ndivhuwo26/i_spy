import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Neighborhood Watch</Text>
      <Button title="Login" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
