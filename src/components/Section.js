import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const SectionHeader = ({ title, actionText, actionIcon, onActionPress }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity style={styles.actionButton} onPress={onActionPress}>
      {actionIcon}
      {actionText && <Text style={styles.actionText}> {actionText}</Text>}
    </TouchableOpacity>
  </View>
);

const Section = ({ title, actionText, actionIcon, onActionPress, data, renderItem, horizontal, numColumns, contentContainerStyle }) => {
  return (
    <View style={styles.container}>
      <SectionHeader 
        title={title} 
        actionText={actionText} 
        actionIcon={actionIcon} 
        onActionPress={onActionPress} 
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={horizontal}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        scrollEnabled={horizontal} // Disable scroll if it's a grid in a vertical scrollview
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#FFA500',
    fontWeight: '600',
  },
});

export default Section;
