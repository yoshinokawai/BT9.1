import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IconButton = ({ text, icon, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon}
      <Text style={[styles.buttonText, textStyle]}> {text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default IconButton;
