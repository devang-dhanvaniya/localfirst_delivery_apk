import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';

export interface GoogleIconProps extends IconProps {}
const GoogleIcon = (props: GoogleIconProps) => {
  const {
    pathStyles = {},
    size = 28,
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
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M21.805 10.041H21V10h-9v4h5.651A5.998 5.998 0 016 12a6 6 0 016-6c1.53 0 2.921.577 3.98 1.52L18.81 4.69A9.954 9.954 0 0012 2C6.478 2 2 6.478 2 12c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959z"
          fill="#FFC107"
          {...pathStyles?.[0]}
        />
        <Path
          d="M3.153 7.346L6.44 9.755A5.997 5.997 0 0112 6c1.53 0 2.921.577 3.98 1.52l2.83-2.829A9.954 9.954 0 0012 2a9.994 9.994 0 00-8.847 5.346z"
          fill="#FF3D00"
          {...pathStyles?.[0]}
        />
        <Path
          d="M12 22c2.583 0 4.93-.988 6.705-2.596l-3.095-2.619A5.955 5.955 0 0112 18a5.997 5.997 0 01-5.641-3.973L3.098 16.54C4.753 19.777 8.114 22 12 22z"
          fill="#4CAF50"
          {...pathStyles?.[0]}
        />
        <Path
          d="M21.805 10.041H21V10h-9v4h5.651a6.02 6.02 0 01-2.043 2.785h.002l3.095 2.619C18.485 19.602 22 17 22 12c0-.67-.069-1.325-.195-1.959z"
          fill="#1976D2"
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoGoogleIcon = memo(GoogleIcon);
export default MemoGoogleIcon;
