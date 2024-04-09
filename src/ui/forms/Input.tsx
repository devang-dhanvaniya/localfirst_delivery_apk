import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {useState} from 'react';

// UI IMPORT
import {Icon, IconKeys} from '../icons';
import {Text} from '../typography';

// PROJECT IMPORT
import {Colors} from '../../constant';

export type InputVatiants = 'Normal' | 'Password' | 'TextArea';
export interface InputProps extends TextInputProps {
  label?: string;
  name: string;
  errors?: any;
  inputStyle?: any;
  labelStyle?: any;
  messageStyle?: any;
  icon?: IconKeys;
  rightIcon?: IconKeys;
  variant?: InputVatiants;
  onIconPress?: (e?: any) => void;
  onRightIconPress?: (e?: any) => void;
}
const Input = (props: InputProps) => {
  const {
    style = {},
    inputStyle = {},
    labelStyle = {},
    messageStyle = {},
    label,
    name,
    icon,
    rightIcon,
    errors,
    variant = 'Normal',
    onIconPress,
    onRightIconPress,
    ...rest
  } = props;

  const message = errors?.[name]?.message || '';

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const prepareRightIconName = (): {name: IconKeys} | null => {
    if (variant === 'Password') {
      return {name: secureTextEntry ? 'EyeOffIcon' : 'EyeOnIcon'};
    }

    return rightIcon ? {name: rightIcon} : null;
  };

  return (
    <View style={[styles.main, style]}>
      <View>
        {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      </View>
      <View style={styles.field}>
        {icon ? (
          <Icon
            name={icon}
            pressStyle={styles.leftIcon}
            onPress={onIconPress}
          />
        ) : null}
        <TextInput
          secureTextEntry={variant === 'Password' ? secureTextEntry : false}          style={[
            styles.input,
            {
              borderColor: message ? Colors.RED : Colors.GRAY,
              paddingLeft: icon ? 40 : 10,
              paddingRight: rightIcon ? 40 : 10,
              color: 'black',
            },
            inputStyle,
          ]}
          {...rest}
        />
        {prepareRightIconName() ? (
          // @ts-ignore
          <Icon
            pressStyle={styles.rightIcon}
            {...prepareRightIconName()}
            onPress={e => {
              if (variant === 'Password') {
                setSecureTextEntry(!secureTextEntry);
              }
              onRightIconPress?.(e);
            }}
          />
        ) : null}
      </View>
      {message ? (
        <Text style={[styles.message, messageStyle]}>{message}</Text>
      ) : null}
    </View>
  );
};

export default Input;

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
    fontSize: 16,
  },
  message: {
    color: Colors.RED,
  },
});
