import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import{AntDesign,Ionicons}from''expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <AntDesign name="setting" size={24} color="#555" />
          <Text style={styles.menuText}>Account Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <AntDesign name="hearto" size={24} color="#555" />
          <Text style={styles.menuText}>My Favorites</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="time-outline" size={24} color="#555" />
          <Text style={styles.menuText}>Order History</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <AntDesign name="logout" size={24} color="#E74C3C" />
          <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#3498DB',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  menuContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  arrow: {
    marginLeft: 'auto',
  },
  logoutButton: {
    borderBottomWidth: 0, 
    marginTop: 10,
    paddingVertical: 20,
  },
  logoutText: {
    color: '#E74C3C',
    fontWeight: '600',
  },
});

export default ProfileScreen;