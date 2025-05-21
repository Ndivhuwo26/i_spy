import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, RefreshControl, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
};

const dummyData: Post[] = [
  {
    id: '1',
    title: 'Suspicious Activity',
    description: 'Unknown person loitering near school area.',
    image: 'https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=15&size=200x200&key=YOUR_API_KEY',
    location: '5th Avenue, NY',
  },
  {
    id: '2',
    title: 'Vandalism',
    description: 'Graffiti found on community wall.',
    image: 'https://maps.googleapis.com/maps/api/staticmap?center=Kempton+Park,Gauteng,South+Africa&zoom=14&size=200x200&key=YOUR_API_KEY',


    location: 'Sunset Blvd, LA',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [posts, setPosts] = useState(dummyData);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity
      onPress={() => router.push(`/post/${item.id}`)}
      style={styles.card}
    >
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.newPostButton}
        onPress={() => router.push('/new-post')}
      >
        <Text style={styles.newPostText}>➕ New Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 10 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  location: {
    marginTop: 4,
    color: 'gray',
    fontSize: 12,
  },
  newPostButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 4,
  },
  newPostText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
