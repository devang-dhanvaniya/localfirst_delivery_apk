import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

// PROJECT IMPORT
import {Colors} from '../../constant';

// THIRD - PARTY IMPORT
import {Snackbar, SnackbarProps} from 'react-native-paper';
import { ResToast, initialResToast } from '../../features/common';

const toastVariants: any = {
  Primary: {backgroundColor: `${Colors.PRIMARY}`, color: Colors.WHITE},
  Secondary: {backgroundColor: `${Colors.SECONDARY}`, color: Colors.WHITE},
  Error: {backgroundColor: `${Colors.RED}`, color: Colors.WHITE},
};

type ToastVariants = keyof typeof toastVariants;

interface TodoProps
  extends Omit<SnackbarProps, 'children' | 'visible' | 'onDismiss'> {
  variant?: ToastVariants;
  children?: any;
  message?: string;
  visible?: boolean;
  resToast?: ResToast;
  onDismiss?: () => void;
  setResToast?: React.Dispatch<React.SetStateAction<ResToast>>;
}
const Toast = (props: TodoProps) => {
  const {
    variant = 'Primary',
    visible = false,
    message,
    children,
    style,
    resToast,
    duration = 1000,
    onDismiss,
    setResToast,
    ...rest
  } = props;

  const prepareMessage = () => {
    return resToast ? resToast?.message : message;
  };

  const prepareVariant = (): ToastVariants => {
    if (resToast) {
      return resToast?.status ? 'Primary' : 'Error';
    } else {
      return variant;
    }
  };

  return (
    <Snackbar
      style={[toastVariants?.[prepareVariant()], style]}
      visible={resToast ? resToast?.isToast : visible}
      duration={duration}
      onDismiss={() => {
        setResToast?.(initialResToast);
        onDismiss?.();
      }}
      {...rest}>
      {prepareMessage() ? prepareMessage() : children}
    </Snackbar>
  );
};

export default Toast;

const styles = StyleSheet.create({});
