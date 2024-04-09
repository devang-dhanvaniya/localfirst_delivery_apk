import {ImageProps} from 'react-native';

// UI IMPORT
import * as imageComponents from './images';

export {imageComponents};
export type ImageKeys = keyof typeof imageComponents;

export {default as UIImage} from './UIImage';

export interface UIImageProps extends ImageProps {
  name: ImageKeys;
}
