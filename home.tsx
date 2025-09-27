import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the App</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Dashboard</Text>
          <Text style={styles.cardText}>Quick access to your main features.</Text>
        </View>

        <Image
          source={{ uri: 'https://picsum.photos/400/200' }} 
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.cardText}>You have 3 unread messages.</Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 My Awesome App</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1e3c72',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 15,
  },
  footer: {
    marginTop: 30,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomeScreen;