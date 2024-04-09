import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface CloseIconProps extends IconProps {}
const CloseIcon = (props: CloseIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = Colors.BLACK,
    fill = 'none',
    strokeWidth = 1,
    style,
    ...rest
  } = props;
  return (
    <>
      <Svg
        style={style}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}>
        <Circle cx={12} cy={12} r={10} {...pathStyles?.[0]} />
        <Path d="M15 9l-6 6M9 9l6 6" {...pathStyles?.[1]} />
      </Svg>
    </>
  );
};
const MemoCloseIcon = memo(CloseIcon);
export default MemoCloseIcon;
