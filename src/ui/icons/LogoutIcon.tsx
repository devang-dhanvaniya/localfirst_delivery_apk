import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './index';
import {Colors} from '../../constant';

export interface LogoutIconProps extends IconProps {}

const LogoutIcon = (props: LogoutIconProps) => {
  const {
    pathStyles = {},
    size = 24,
    stroke = Colors.SECONDARY,
    fill = 'none',
    strokeWidth = 2,
    style,
    ...rest
  } = props;
  return (
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
      <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" {...pathStyles?.[0]} />
      <Path d="M16 17L21 12 16 7" {...pathStyles?.[1]} />
      <Path d="M21 12L9 12" {...pathStyles?.[2]} />
    </Svg>
  );
};
const MemoLogoutIcon = memo(LogoutIcon);
export default MemoLogoutIcon;
