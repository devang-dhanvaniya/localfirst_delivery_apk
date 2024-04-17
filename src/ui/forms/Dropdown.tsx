import {Pressable, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';

// UI IMPORT
import {Text} from '../typography';
import {Icon, IconKeys} from '../icons';

// PROJECT IMPORT
import {Colors, Common} from '../../constant';
import DropdownModal from './DropdownModal';
import {OptionTypes} from '../../features/common';

export type DropdownVatiants = 'Normal' | 'MultiSelect';
export interface DropdownProps {
  style?: any;
  label?: string;
  name: string;
  errors?: any;
  inputStyle?: any;
  labelStyle?: any;
  messageStyle?: any;
  icon?: IconKeys;
  variant?: DropdownVatiants;
  value?: any;
  placeholder?: string;
  options: OptionTypes[];
  valueKey?: string;
  labelKey?: string;
  onChangeText?: (value: any, e?: any) => void;
  onIconPress?: (e?: any) => void;
}
const Dropdown = (props: DropdownProps) => {
  const {
    style = {},
    inputStyle = {},
    labelStyle = {},
    messageStyle = {},
    label,
    name,
    icon,
    errors,
    variant = 'Normal',
    value = '',
    placeholder = 'Select',
    options,
    valueKey = Common.OPTION_VALUE_KEY,
    labelKey = Common.OPTION_LABEL_KEY,
    onIconPress,
    onChangeText,
    ...rest
  } = props;

  const message = errors?.[name]?.message || '';
  const isMulti = variant === 'MultiSelect';

  const ref = useRef<any>();

  const onPress = () => {
    ref.current?.present();
  };

  const prepareIsValue = () => {
    return variant === 'MultiSelect' ? !!value?.length : !!value;
  };

  const prepareLabel = () => {
    const labels: any[] = [];
    options?.forEach(item => {
      if (isMulti) {
        if (value?.includes(item?.[valueKey])) {
          labels.push(item?.[labelKey]);
        }
      } else {
        if (item?.[valueKey]?.toString() === value?.toString()) {
          labels[0] = item?.[labelKey];
        }
      }
    });
    return labels?.join(',');
  };

  return (
    <>
      <View style={[styles.main, style]}>
        <View>
          {label ? (
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          ) : null}
        </View>
        <View style={styles.field}>
          {icon ? (
            <Icon
              name={icon}
              pressStyle={styles.leftIcon}
              onPress={onIconPress}
            />
          ) : null}
          <Pressable
            style={[
              styles.input,
              {
                borderColor: message ? Colors.RED : Colors.GRAY,
                paddingLeft: icon ? 40 : 10,
                paddingRight: 40,
              },
              inputStyle,
            ]}
            onPress={onPress}
            {...rest}>
            <Text
              style={[
                styles.text,
                {color: prepareIsValue() ? Colors.BLACK : Colors.SECONDARY},
              ]}>
              {prepareIsValue() ? prepareLabel() : placeholder}
            </Text>
          </Pressable>
          <Icon
            name="DownArrowIcon"
            pressStyle={styles.rightIcon}
            onPress={onPress}
          />
        </View>
        {message ? (
          <Text style={[styles.message, messageStyle]}>{message}</Text>
        ) : null}
      </View>
      <DropdownModal
        refe={ref}
        options={options}
        variant={variant}
        valueKey={valueKey}
        labelKey={labelKey}
        label={label}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  main: {
    paddingBottom: 5,
  },
  field: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  leftIcon: {
    position: 'absolute',
    left: 5,
  },
  rightIcon: {
    position: 'absolute',
    right: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    paddingVertical: 3,
  },
  message: {
    color: Colors.RED,
  },
});
