import {Image} from 'react-native';

// UI IMPORT
import * as imageComponents from './images';
import {UIImageProps} from '.';

const UIImage = (props: UIImageProps) => {
  const {style = {}, name, ...rest} = props;
  const UIImageStroy = imageComponents?.[name];

  if (!UIImageStroy) {
    return <></>;
  }

  return <Image style={style} source={imageComponents?.[name]} {...rest} />;
};

export default UIImage;
