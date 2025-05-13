import { View, StyleSheet, Dimensions } from "react-native";
//import MapView from "react-native-maps";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
// This is a placeholder for the map screen.
// In a real application, this screen would display a map with markers for reported incidents.
