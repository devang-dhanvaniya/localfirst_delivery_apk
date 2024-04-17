import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {useState} from 'react';

// UI IMPORT
import {Text} from '../typography';

// PROJECT IMPORT
import {Colors} from '../../constant';
import {ActivityIndicator} from 'react-native-paper';

const buttonVariants = {
  Primary: Colors.PRIMARY,
  Secondary: Colors.SECONDARY,
  Yellow: Colors.YELLOW,
};

type ButtonVariants = keyof typeof buttonVariants;
interface ButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
  text?: string;
  variant?: ButtonVariants;
  isLoading?: boolean;
  onPress?: (e?: any) => void;
}

const Button = (props: ButtonProps) => {
  const {
    style,
    children,
    text = '',
    isLoading,
    variant = 'Primary',
    onPress,
    ...rest
  } = props;

  const [isLocalLoading, setIsLocalLoading] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        {backgroundColor: buttonVariants?.[variant]},
      ]}
      onPress={async e => {
        try {
          setIsLocalLoading(true);
          await onPress?.(e);
          setIsLocalLoading(false);
        } catch (err) {
          console.error('Err =-=>', err);

          setIsLocalLoading(false);
        }
      }}
      {...rest}>
      {children ? children : <Text style={styles.buttonText}>{text}</Text>}
      {isLocalLoading || isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator
            color={Colors.WHITE}
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    borderRadius: 8,
    paddingVertical: 12,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 50,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  loader: {
    position: 'absolute',
    right: 10,
  },
});
