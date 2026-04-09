import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import { AppContext } from '../../context/AppContext';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header containing blue banner and avatar */}
        <View style={styles.headerSection}>
          <View style={styles.headerBanner} />
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?img=11' }} 
              style={styles.avatar} 
            />
          </View>
        </View>
        
        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.nameText}>Hung Nguyen</Text>
          <Text style={styles.roleText}>Mobile developer</Text>
          
          <Text style={styles.descriptionText}>
            I have above 5 years of experience in native mobile apps development, now i am learning React Native
          </Text>

          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  headerBanner: {
    width: '100%',
    height: width * 0.4,
    backgroundColor: '#00BFFF',
  },
  avatarContainer: {
    position: 'absolute',
    bottom: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  infoSection: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  roleText: {
    fontSize: 16,
    color: '#00BFFF',
    fontWeight: '600',
    marginBottom: 24,
  },
  descriptionText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  signOutButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
