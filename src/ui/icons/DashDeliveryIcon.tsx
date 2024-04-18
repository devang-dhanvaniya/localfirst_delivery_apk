import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

export interface DashDeliveryIconProps extends IconProps {}
const DashDeliveryIcon = (props: DashDeliveryIconProps) => {
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
          fill="#FFF5D9"
          {...pathStyles?.[0]}
        />
        <Path
          d="M25 13v10c0 1.1-.9 2-2 2H12v-6.38c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H25z"
          stroke="#FFBB38"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
        <Path
          d="M32 25v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2h-1c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2v-7h1.84c.72 0 1.38.39 1.74 1.01L30.29 20H29c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3z"
          stroke="#FFBB38"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
        <Path
          d="M18 33a2 2 0 100-4 2 2 0 000 4zM26 33a2 2 0 100-4 2 2 0 000 4zM32 23v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L32 23z"
          stroke="#FFBB38"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[3]}
        />
        <Path
          d="M19 15.91c.02.75-.18 1.47-.54 2.08-.2.36-.46.69-.77.95-.68.65-1.59 1.04-2.6 1.06-1.24.03-2.36-.51-3.09-1.38-.14-.15-.26-.32-.37-.49-.39-.59-.61-1.29-.63-2.04A3.99 3.99 0 0114.91 12c1.05-.02 2.01.36 2.73 1 .81.71 1.33 1.74 1.36 2.91z"
          stroke="#FFBB38"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[4]}
        />
        <Path
          d="M13.44 16.03l1.01.96 2.09-2.02"
          stroke="#FFBB38"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[5]}
        />
      </Svg>
    </>
  );
};
const MemoDashDeliveryIcon = memo(DashDeliveryIcon);
export default MemoDashDeliveryIcon;
