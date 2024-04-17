import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface LocationIconProps extends IconProps {}
const LocationIcon = (props: LocationIconProps) => {
  const {
    pathStyles = {},
    size = 14,
    stroke = '',
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
        viewBox="0 0 14 14"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M10.3 9.716l-1.886 1.886a2 2 0 01-2.828 0L3.7 9.716a4.667 4.667 0 116.6 0z"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}
        />
        <Path
          d="M8.75 6.417a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
      </Svg>
    </>
  );
};
const MemoLocationIcon = memo(LocationIcon);
export default MemoLocationIcon;
