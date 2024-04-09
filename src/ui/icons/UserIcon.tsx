import React, {memo} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../../constant';
import {IconProps} from '.';

export interface UserIconProps extends IconProps {}

const UserIcon = (props: UserIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = Colors.SECONDRAY,
    fill = 'none',
    strokeWidth = 1.5,
    style,
    ...rest
  } = props;

  return (
    <Svg
      style={style}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      {...rest}>
      <Path
        fill="currentColor"
        d="M11.5 6A3.514 3.514 0 008 9.5c0 1.922 1.578 3.5 3.5 3.5S15 11.422 15 9.5 13.422 6 11.5 6m9 0A3.514 3.514 0 0017 9.5c0 1.922 1.578 3.5 3.5 3.5S24 11.422 24 9.5 22.422 6 20.5 6m-9 2c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5m9 0c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5M7 12c-2.2 0-4 1.8-4 4 0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 002 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.036 5.036 0 00-2.219-4.156C10.523 18.117 11 17.114 11 16c0-2.2-1.8-4-4-4m5 11c-.625.836-1 1.887-1 3h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.024 5.024 0 00-1-3c-.34-.453-.75-.84-1.219-1.156C19.523 21.117 20 20.114 20 19c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.042 5.042 0 0012 23m8 0h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.036 5.036 0 00-2.219-4.156C28.523 18.117 29 17.114 29 16c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 0020 23M7 14c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m18 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m-9 3c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2"
      />
    </Svg>
  );
};


const MemoUserIcon = memo(UserIcon);
export default MemoUserIcon;

