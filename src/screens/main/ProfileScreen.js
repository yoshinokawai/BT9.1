import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
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
        {/* Blue Banner */}
        <View style={styles.headerBanner} />
        
        <View style={styles.contentContainer}>
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
  headerBanner: {
    width: '100%',
    height: width * 0.4,
    backgroundColor: '#00BFFF',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 40,
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
