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

const Section = ({ title, actionText, actionIcon, onActionPress, data, renderItem, horizontal, contentContainerStyle }) => {
  return (
    <View style={styles.container}>
      <SectionHeader 
        title={title} 
        actionText={actionText} 
        actionIcon={actionIcon} 
        onActionPress={onActionPress} 
      />
      {horizontal ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={contentContainerStyle}
        />
      ) : (
        <View style={[styles.gridContainer, contentContainerStyle]}>
          {data.map((item, index) => (
             <View key={index.toString()} style={{ width: '50%' }}>
               {renderItem({ item, index })}
             </View>
          ))}
        </View>
      )}
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Section;
