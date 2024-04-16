import React from 'react';
import {View, TouchableOpacity, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Navigator} from '../../constant';
import navigationServices from '../../navigations/navigationServices';
import {Icon} from '../icons';
import {useNotifictionList} from '../../features/order/orderSlice';
import {useGetNotificationQuery} from '../../features/order/orderApi';

const Header = ({navigation}: any) => {
  useGetNotificationQuery();
  const handleProfilePress = () => {
    navigationServices.navigate(Navigator.PROFILE);
  };
  const handleNotificationPress = () => {
    navigationServices.navigate(Navigator.NOTIFICATION);
  };
  const notificationList = useNotifictionList();
  console.log(notificationList, 'notificationListnotificationList');

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={handleNotificationPress}>
            <Icon name="NotificationIcon" strokeWidth={2} />
          </TouchableOpacity>
        </View>
        <Pressable onPress={handleProfilePress}>
          <FastImage
            source={require('../../assets/images/Profile.png')}
            style={{width: 40, height: 40, borderRadius: 15, marginRight: 10}}
          />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
