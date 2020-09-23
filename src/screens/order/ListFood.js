import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FoodItem from './FoodItem';
import Swipeable from 'react-native-swipeable';

const mocks = [
  {
    name: 'Chicken, Cashew, and Avocado Salad',
    restaurant: 'The Plant Cafe',
    price: 15,
    image: require('../../assets/images/salads.png'),
    quantity: 1,
    id: 1,
  },
  {
    name: 'Vegan Mac & Cheese',
    restaurant: 'The Plant Cafe',
    price: 14,
    image: require('../../assets/images/cheese.png'),
    quantity: 2,
    id: 2,
  },
];

const ListFood = () => {
  const [data, setData] = useState(mocks);
  const onDelete = (id) => {
    if (id) {
      setData((e) => e.filter((x) => x.id != id));
    }
  };

  const renderFood = (item) => {
    return (
      <Swipeable
        rightButtons={[
          <View style={styles.button}>
            <Pressable onPress={() => onDelete(item.id)}>
              <Image source={require('../../assets/images/garbage.png')} />
            </Pressable>
          </View>,
        ]}>
        <FoodItem data={item} />
      </Swipeable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.listFood}>
        {data.map(renderFood)}
        <FoodItem isDelivery fee={2.5} />
      </View>
    </View>
  );
};

export default ListFood;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  listFood: {
    // flex: 1,
  },
  button: {
    justifyContent: 'center',
    marginTop: 40,
  },
});
