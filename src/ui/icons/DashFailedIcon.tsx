import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

export interface DashFailedIconProps extends IconProps {}
const DashFailedIcon = (props: DashFailedIconProps) => {
  const {
    pathStyles = {},
    size = 45,
    stroke = '',
    fill = 'none',
    strokeWidth = 2,
    style,
    ...rest
  } = props;
  return (
    <>
      <Svg
        style={style}
        width={size}
        height={size}
        viewBox="0 0 45 45"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Circle
          cx={22.5}
          cy={22.5}
          r={22.5}
          fill="#E6DCFA"
          {...pathStyles?.[0]}
        />
        <Path
          d="M25 13v10c0 1.1-.9 2-2 2H12v-6.38c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H25z"
          stroke="#8961DA"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
        <Path
          d="M32 25v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2h-1c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2v-7h1.84c.72 0 1.38.39 1.74 1.01L30.29 20H29c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3z"
          stroke="#8961DA"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
        <Path
          d="M18 33a2 2 0 100-4 2 2 0 000 4zM26 33a2 2 0 100-4 2 2 0 000 4zM32 23v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L32 23z"
          stroke="#8961DA"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[3]}
        />
        <Path
          d="M19 16c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 0111 16c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0119 16zM16.069 17.04l-2.11-2.11M16.04 14.959l-2.11 2.11"
          stroke="#8961DA"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[4]}
        />
      </Svg>
    </>
  );
};
const MemoDashFailedIcon = memo(DashFailedIcon);
export default MemoDashFailedIcon;
