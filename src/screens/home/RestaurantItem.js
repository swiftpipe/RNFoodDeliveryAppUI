import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const RestaurantItem = ({data, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Image source={data.background} style={styles.image} />
        <View style={styles.milesView}>
          <Text style={styles.milesText}>{data.miles} miles</Text>
        </View>
      </View>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>
        {data.type} • {data.country} • ${data.currency}
      </Text>
      <View style={styles.smileList}>
        <Image
          source={require('../../assets/images/smile.png')}
          style={styles.icon}
        />
        <Text style={styles.smile}>{data.smile}%</Text>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F1F2F6',
    borderRadius: 10,
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontFamily: 'CeraPro-Bold',
    fontSize: 16,
    marginTop: 15,
  },

  description: {
    fontFamily: 'CeraPro-Medium',
    color: 'gray',
    marginVertical: 8,
  },

  smile: {
    color: '#59B7C9',
    fontFamily: 'CeraPro-Bold',
    marginLeft: 5,
  },

  smileList: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  milesView: {
    position: 'absolute',
    backgroundColor: 'rgba(129,122,115,0.9)',
    padding: 12,
    borderRadius: 10,
    bottom: 20,
    left: 20,
  },

  milesText: {
    color: '#000',
  },
});
