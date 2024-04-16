import React, {memo} from 'react';
import {IconProps} from './index';
import {Path, Svg} from 'react-native-svg';
import { Colors } from '../../constant';

export interface NotificationIconProps extends IconProps {}
const NotificationIcon = (props: NotificationIconProps) => {
  const {
    pathStyles = {},
    size = 24,
    stroke = Colors.BLACK,
    fill = 'none',
    strokeWidth = 1,
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
        {...rest}>
        <Path
          d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
          {...pathStyles?.[0]}
        />
        <Path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" {...pathStyles?.[1]} />
      </Svg>
    </>
  );
};
const MemoNotificationIcon = memo(NotificationIcon);
export default MemoNotificationIcon;
