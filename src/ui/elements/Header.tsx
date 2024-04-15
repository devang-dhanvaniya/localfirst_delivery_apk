import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Navigator} from '../../constant';
import {Profile} from '../../features/profile';
import navigationServices from '../../navigations/navigationServices';

const Header = ({navigation}: any) => {
  const handleProfilePress = () => {
    navigationServices.navigate(Navigator.PROFILE);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={handleProfilePress}>
        <FastImage
          source={require('../../assets/images/circle-user-round.png')}
          style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}
        />
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
