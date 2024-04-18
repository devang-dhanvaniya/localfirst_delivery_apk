import React from 'react';
import {View, TouchableOpacity, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import {Navigator} from '../../constant';
import navigationServices from '../../navigations/navigationServices';
import {Icon} from '../icons';
import {useAuth} from '../../hooks';
import {commonStyles} from '../../styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useRoute } from '@react-navigation/native';

const Header = () => {
  const {clearAuth} = useAuth();
  const handleNotificationPress = () => {
    navigationServices.navigate(Navigator.NOTIFICATION);
  };
  const route =  useRoute()

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'center'}}>
        {route?.name === 'DASHBOARD' ? <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
          <TouchableOpacity onPress={handleNotificationPress}>
            <Icon
              name="NotificationIcon"
              stroke={Colors.GREEN}
              strokeWidth={2}
              fill={Colors.BLACK}
            />
          </TouchableOpacity>
        </View> : null}
        <Pressable
          onPress={() => {
            clearAuth();
          }}>
          <View style={[commonStyles.flexAlignCenter, styles.logoutBtn]}>
            <Icon name="LogoutIcon" size={18} />
          </View>
        </Pressable>
        {/* <Pressable onPress={handleProfilePress}>
          <FastImage
            source={require('../../assets/images/Profile.png')}
            style={{width: 40, height: 40, borderRadius: 15, marginRight: 10}}
          />
        </Pressable> */}
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
  logoutBtn: {
    gap: 10,
    padding: 20,
    borderColor: '#f1f1f1',
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 20,
    width: 20,
  },
});
