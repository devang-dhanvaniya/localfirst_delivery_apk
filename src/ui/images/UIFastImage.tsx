import {
  StyleSheet,
  ImageSourcePropType,
  Image,
  StyleProp,
  ImageStyle,
} from 'react-native';
import React from 'react';

// PROJECT IMPORT
import {DefaultImage} from './images';

// THIRD - PARTY IMPORT
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface UIFastImageProps extends Omit<FastImageProps, 'source'> {
  source: any;
}
const UIFastImage = (props: UIFastImageProps) => {
  const {source, defaultSource = DefaultImage, ...rest} = props;
  console.log(source, 'sourcesourcesource');

  return (
    <>
      {source?.uri ? (
        <FastImage
          defaultSource={defaultSource}
          source={source}
          // style={style}
          {...rest}
        />
      ) : (
        <FastImage source={DefaultImage} {...rest} />
      )}
    </>
  );
};

export default UIFastImage;

const styles = StyleSheet.create({});
