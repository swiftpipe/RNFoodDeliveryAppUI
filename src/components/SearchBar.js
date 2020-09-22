import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search for a restaurant</Text>
      <Image
        style={styles.icon}
        source={require('../assets/images/search.png')}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F2F6',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: '#4E4F50',
    fontFamily: 'CeraPro-Medium',
    flex: 1,
  },
  icon: {
    tintColor: '#4E4F50',
  },
});
