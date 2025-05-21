import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const dummyFeed = [
  {
    id: '1',
    user: 'SarahN',
    title: 'Suspicious activity near Elm Street',
    time: '2 hrs ago',
    avatar: 'https://i.pravatar.cc/100?img=1',
    mapThumbnail: 'https://maps.googleapis.com/maps/api/staticmap?center=Elm+Street&zoom=15&size=200x100&key=YOUR_API_KEY',
  },
  {
    id: '2',
    user: 'JakeM',
    title: 'Lost pet seen on Maple Avenue',
    time: '5 hrs ago',
    avatar: 'https://i.pravatar.cc/100?img=2',
    mapThumbnail: 'https://maps.googleapis.com/maps/api/staticmap?center=Maple+Avenue&zoom=15&size=200x100&key=YOUR_API_KEY',
  },
  {
    id: '3',
    user: 'Admin',
    title: 'Cleanup event tomorrow at 10AM',
    time: '1 day ago',
    avatar: 'https://i.pravatar.cc/100?img=3',
    mapThumbnail: 'https://maps.googleapis.com/maps/api/staticmap?center=Community+Park&zoom=15&size=200x100&key=YOUR_API_KEY',
  },
];

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500); // Simulated refresh
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community Feed</Text>

      <FlatList
        data={dummyFeed}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/post/${item.id}`)} // Assumes post details route
          >
            <View style={styles.row}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.user}>{item.user}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.mapThumbnail }} style={styles.map} />
          </TouchableOpacity>
        )}
      />

      {/* Floating New Post Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/new-post')}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f7f7' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userInfo: { flexDirection: 'column' },
  user: { fontWeight: 'bold', fontSize: 14 },
  time: { fontSize: 12, color: 'gray' },
  title: { fontSize: 16, marginBottom: 8 },
  map: { width: '100%', height: 100, borderRadius: 8 },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});