import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import Section from '../../components/Section';

const categoriesData = [
  { id: '1', name: 'Pizza', color: '#FFDAB9' },
  { id: '2', name: 'Burgers', color: '#FFDEAD' },
  { id: '3', name: 'Steak', color: '#F4A460' },
];

const popularData = [
  { id: '1', name: 'Food 1', subtitle: 'By Viet Nam', price: '1$', color: '#E0DDCE' },
  { id: '2', name: 'Food 2', subtitle: 'By Viet Nam', price: '3$', color: '#D4E6D2' },
];

const saleOffData = [
  { id: '1', discount: '10% OFF', color: '#E0DDCE' },
  { id: '2', discount: null, color: '#D4E6D2' },
];

const HomeScreen = () => {

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <View style={[styles.categoryImagePlaceholder, { backgroundColor: item.color }]} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={[styles.itemImagePlaceholder, { backgroundColor: item.color }]} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );

  const renderSaleOffItem = ({ item }) => (
    <View style={styles.itemCard}>
      {item.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      )}
      <View style={[styles.itemImagePlaceholder, { backgroundColor: item.color }]} />
    </View>
  );

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

        <Section
          title="Top Categories"
          actionText="Filter"
          actionIcon={<Feather name="filter" size={16} color="#FFA500" />}
          data={categoriesData}
          renderItem={renderCategoryItem}
          horizontal={true}
          contentContainerStyle={styles.horizontalListContent}
        />

        <Section
          title="Popular Items"
          actionText="View all"
          data={popularData}
          renderItem={renderPopularItem}
          numColumns={2}
          contentContainerStyle={styles.gridListContent}
        />

        <Section
          title="Popular Items" // Keep the title from the image
          actionText="View all"
          data={saleOffData}
          renderItem={renderSaleOffItem}
          numColumns={2}
          contentContainerStyle={styles.gridListContent}
        />

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
    marginBottom: 8,
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
  horizontalListContent: {
    paddingLeft: 16,
  },
  gridListContent: {
    paddingHorizontal: 16,
    flexDirection: 'column', 
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
  itemCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 8,
    marginHorizontal: 4,
    marginBottom: 16,
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
