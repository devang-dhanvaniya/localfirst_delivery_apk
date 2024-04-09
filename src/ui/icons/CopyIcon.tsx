import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface CopyIconProps extends IconProps {}
const CopyIcon = (props: CopyIconProps) => {
  const {
    pathStyles = {},
    size = 18,
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
        viewBox="0 0 18 18"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 1.5A1.5 1.5 0 005.25 3v1.5h1.5V3H15v8.25h-1.5v1.5H15a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 0015 1.5H6.75zM3 5.25a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h8.25a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5H3zm0 1.5h8.25V15H3V6.75z"
          fill={Colors.BLACK}
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoCopyIcon = memo(CopyIcon);
export default MemoCopyIcon;
