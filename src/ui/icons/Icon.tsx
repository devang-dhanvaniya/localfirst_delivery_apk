// UI IMPORT
import * as iconComponents from './icons';
import {IconKeys, IconProps} from '.';
import {Pressable} from 'react-native';

const Icon = (props: IconProps & {name: IconKeys}) => {
  const {style = {}, pressStyle = {}, name, onPress, ...rest} = props;
  const IconStroy = iconComponents?.[name];

  if (!IconStroy) {
    return <></>;
  }

  return (
    <>
      {onPress ? (
        <Pressable style={pressStyle} onPress={(e) => {
          onPress?.(e)
        }}>
          <IconStroy style={style} {...rest} />
        </Pressable>
      ) : (
        <IconStroy style={style} {...rest} />
      )}
    </>
  );
};

export default Icon;
