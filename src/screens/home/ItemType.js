import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ItemType = ({type, image, selected}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imgBg, selected && {backgroundColor: '#59B7C9'}]}>
        <Image
          source={image}
          resizeMode="contain"
          style={[styles.icon, selected && {tintColor: '#FFF'}]}
        />
      </View>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default ItemType;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontFamily: 'CeraPro-Medium',
    marginTop: 10,
  },

  imgBg: {
    backgroundColor: '#F1F2F6',
    padding: 20,
    borderRadius: 20,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#222',
  },
});
