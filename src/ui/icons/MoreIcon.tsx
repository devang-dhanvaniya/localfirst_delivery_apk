import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface MoreIconProps extends IconProps {}
const MoreIcon = (props: MoreIconProps) => {
  const {
    pathStyles = {},
    size = 32,
    stroke ="",
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
        viewBox="0 0 32 32"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Circle
          cx={16}
          cy={16}
          r={15.5}
          fill="#fff"
          stroke="#fff"
          {...pathStyles?.[0]}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.75 15.8c0 .994-.84 1.8-1.875 1.8C7.839 17.6 7 16.794 7 15.8S7.84 14 8.875 14c1.036 0 1.875.806 1.875 1.8zm7.125 0c0 .994-.84 1.8-1.875 1.8-1.036 0-1.875-.806-1.875-1.8S14.965 14 16 14c1.035 0 1.875.806 1.875 1.8zm5.25 1.8c1.035 0 1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8c-1.036 0-1.875.806-1.875 1.8s.84 1.8 1.875 1.8z"
          fill="#101010"
          {...pathStyles?.[1]}
        />
      </Svg>
    </>
  );
};
const MemoMoreIcon = memo(MoreIcon);
export default MemoMoreIcon;
