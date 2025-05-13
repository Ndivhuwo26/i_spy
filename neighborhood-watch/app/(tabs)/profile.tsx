import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Button title="Logout" onPress={() => router.replace("/login")} />

      <Button title="Login" onPress={() => router.replace("/login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
});
