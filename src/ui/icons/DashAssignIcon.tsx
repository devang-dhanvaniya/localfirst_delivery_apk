import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

export interface DashAssignIconProps extends IconProps {}
const DashAssignIcon = (props: DashAssignIconProps) => {
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
          fill="#FFE0EB"
          {...pathStyles?.[0]}
        />
        <Path
          d="M22 30a4 4 0 100-8 4 4 0 000 8z"
          stroke="#FF82AC"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
        <Path
          d="M20.44 26l.65.65c.19.19.5.2.69.01l1.78-1.64"
          stroke="#FF82AC"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
        <Path
          d="M19 33h6c4.02 0 4.74-1.61 4.95-3.57l.75-6c.27-2.44-.43-4.43-4.7-4.43h-8c-4.27 0-4.97 1.99-4.7 4.43l.75 6c.21 1.96.93 3.57 4.95 3.57zM17.5 18.67v-.97c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 014.94 4.48v1.38"
          stroke="#FF82AC"
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
const MemoDashAssignIcon = memo(DashAssignIcon);
export default MemoDashAssignIcon;
