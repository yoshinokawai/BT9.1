import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header Search Bar */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.locationIcon}>
            <Ionicons name="location-outline" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput 
              style={styles.searchInput}
              placeholder="Search for meals or area"
            />
            <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
          </View>
        </View>

        {/* Top Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="filter" size={16} color="#FFA500" />
            <Text style={styles.filterText}> Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          <View style={styles.categoryItem}>
            <View style={[styles.categoryImagePlaceholder, { backgroundColor: '#FFDAB9' }]} />
            <Text style={styles.categoryName}>Pizza</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={[styles.categoryImagePlaceholder, { backgroundColor: '#FFDEAD' }]} />
            <Text style={styles.categoryName}>Burgers</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={[styles.categoryImagePlaceholder, { backgroundColor: '#F4A460' }]} />
            <Text style={styles.categoryName}>Steak</Text>
          </View>
        </ScrollView>

        {/* Popular Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemsGrid}>
          {/* Card 1 */}
          <View style={styles.itemCard}>
            <View style={[styles.itemImagePlaceholder, { backgroundColor: '#E0DDCE' }]} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>Food 1</Text>
              <Text style={styles.itemSubtitle}>By Viet Nam</Text>
              <Text style={styles.itemPrice}>1$</Text>
            </View>
          </View>
          {/* Card 2 */}
          <View style={styles.itemCard}>
            <View style={[styles.itemImagePlaceholder, { backgroundColor: '#D4E6D2' }]} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>Food 2</Text>
              <Text style={styles.itemSubtitle}>By Viet Nam</Text>
              <Text style={styles.itemPrice}>3$</Text>
            </View>
          </View>
        </View>

        {/* Repeated Popular Items for Layout Match */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemsGrid}>
          {/* Card 3 */}
          <View style={styles.itemCard}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>10% OFF</Text>
            </View>
            <View style={[styles.itemImagePlaceholder, { backgroundColor: '#E0DDCE' }]} />
          </View>
          {/* Card 4 */}
          <View style={styles.itemCard}>
            <View style={[styles.itemImagePlaceholder, { backgroundColor: '#D4E6D2' }]} />
          </View>
        </View>

      </ScrollView>
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
  headerContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  locationIcon: {
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
  },
  searchIcon: {
    marginLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#FFA500',
    fontWeight: '600',
  },
  viewAllText: {
    color: '#FFA500',
    fontWeight: '600',
  },
  categoriesContainer: {
    paddingLeft: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImagePlaceholder: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: '#333',
  },
  itemsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  itemCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemImagePlaceholder: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemDetails: {
    paddingHorizontal: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
