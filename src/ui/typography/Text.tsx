import {StyleSheet, Text as P, View, TextProps as PProps} from 'react-native';
import React from 'react';
import {Colors} from '../../constant';

// THIRD - PARTY IMPORT
import {Tooltip} from 'react-native-paper';

interface TextProps extends PProps {
  tooltip?: string;
}

const Text = (props: TextProps) => {
  const {children, style, tooltip = '', ...rest} = props;

  return (
    <>
      <P style={[styles.text, style]} {...rest}>
        {children}
      </P>
    </>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: Colors.BLACK,
  },
});
