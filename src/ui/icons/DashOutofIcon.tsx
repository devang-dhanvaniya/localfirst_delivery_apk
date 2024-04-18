import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

export interface DashOutofIconProps extends IconProps {}
const DashOutofIcon = (props: DashOutofIconProps) => {
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
          fill="#DCFAF8"
          {...pathStyles?.[0]}
        />
        <Path
          d="M13.17 18.44L22 23.55l8.77-5.08M22 32.61v-9.07"
          stroke="#16DBCC"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
        <Path
          d="M31.61 20.17v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0025 29c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73v-5.66c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73z"
          stroke="#16DBCC"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
        <Path
          d="M33 29c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 0125 29c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0133 29zM30.07 30.04l-2.12-2.11M30.05 27.959l-2.12 2.11"
          stroke="#16DBCC"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[3]}
        />
      </Svg>
    </>
  );
};
const MemoDashOutofIcon = memo(DashOutofIcon);
export default MemoDashOutofIcon;
