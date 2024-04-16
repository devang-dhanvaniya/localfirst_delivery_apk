import { StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';

// PROJECT IMPORT
import { DefaultImage } from './images';

// THIRD - PARTY IMPORT
import FastImage, { FastImageProps } from 'react-native-fast-image';

interface UIFastImageProps extends FastImageProps {
  defaultImage?: ImageSourcePropType;
}
const UIFastImage = (props: UIFastImageProps) => {
  const { source, defaultImage = DefaultImage, ...rest } = props;

  return (
    <>
      <FastImage defaultSource={defaultImage} source={source} {...rest} />
    </>
  );
};

export default UIFastImage;

const styles = StyleSheet.create({});
