import React from 'react';

// PROJECT IMPORT
import {Colors} from '../../constant';

// THIRD - PARTY IMPORT
import C, {CheckBoxProps as CProps} from '@react-native-community/checkbox';

const variants = {
  Primary: Colors.PRIMARY,
  Secondary: Colors.SECONDARY,
};

export type Variants = keyof typeof variants;

interface CheckboxProps extends CProps {
  variant?: Variants;
}

const CheckBox = (props: CheckboxProps) => {
  const {lineWidth = 1, variant = 'Primary', ...rest} = props;

  return (
    <C
      tintColor={variants?.[variant]}
      tintColors={{true: variants?.[variant], false: variants?.[variant]}}
      lineWidth={lineWidth}
      {...rest}
    />
  );
};

export default CheckBox;
