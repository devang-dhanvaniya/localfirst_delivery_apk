import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// PROJECT IMPORT
import {Colors} from '../../constant';
import {hp, wp} from '../../commonFunctions';

// THIRD - PARTY IMPORT
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native-paper';

interface LoaderProps extends ActivityIndicatorProps {
  visible?: boolean;
}

const Loader = (props: LoaderProps) => {
  const {visible, size = 'large', color = Colors.PRIMARY, children} = props;

  if (!visible) {
    return <></>;
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: wp(100),
        height: hp(100),
        position:'absolute'
      }}>
      <ActivityIndicator size={size} color={color} />
      {children}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
