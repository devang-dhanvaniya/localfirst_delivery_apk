import React, {memo} from 'react';
import {IconProps} from '.';
import { Path, Svg} from 'react-native-svg';

export interface SettingIconProps extends IconProps {}
const SettingIcon = (props: SettingIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = '',
    fill = 'none',
    strokeWidth = 2,
    style,
    ...rest
  } = props;
  return (
    <>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}>
        <Path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          {...pathStyles?.[0]}
        />
        <Path d="M9 22L9 12 15 12 15 22" {...pathStyles?.[1]} />
      </Svg>
    </>
  );
};
const MemoSettingIcon = memo(SettingIcon);
export default MemoSettingIcon;
