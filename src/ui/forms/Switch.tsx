import * as React from 'react';
import {StyleSheet, Switch, View, SwitchProps as SProps} from 'react-native';
import {Text} from '../';
import {Colors} from '../../constant';

export interface SwitchProps extends SProps {
  label?: string;
  labelStyle?: any;
}
const UISwitch = (props: SwitchProps) => {
  const {label, labelStyle = {}, ...rest} = props;

  return (
    <>
      <View>
        {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      </View>
      <Text>
        <Switch {...rest}/>;
      </Text>
    </>
  );
};

export default UISwitch;
const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BLACK,
    marginBottom: 5,
  },
});
