import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const tabs = [
  {id: 'Home', icon: require('../../assets/images/home.png')},

  {id: 'User', icon: require('../../assets/images/user.png')},
  {id: 'Tag', icon: require('../../assets/images/ghim.png')},
  {id: 'Notification', icon: require('../../assets/images/bell.png')},
];
const BottomBar = ({selected = 0}) => {
  const renderTab = (item, index) => {
    return (
      <View style={styles.tab}>
        <View
          style={[
            styles.tabInner,
            selected == index && {
              backgroundColor: '#F1F2F6',
            },
          ]}>
          <Image source={item.icon} />
          {selected == index && <Text style={styles.text}>{item.id}</Text>}
        </View>
      </View>
    );
  };
  return <View style={styles.tabs}>{tabs.map(renderTab)}</View>;
};

export default BottomBar;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F2F6',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  text: {
    color: '#59B7C9',
    fontFamily: 'CeraPro-Bold',
    marginLeft: 5,
  },
});
