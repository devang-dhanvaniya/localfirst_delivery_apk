import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface HomeIconProps extends IconProps {}
const HomeIcon = (props: HomeIconProps) => {
  const {
    pathStyles = {},
    size = 18,
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
        viewBox="0 0 18 18"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M8.08 2.016a1.5 1.5 0 011.737-.074l.104.075 6.288 4.89c.54.42.278 1.269-.374 1.339l-.087.004H15v6a1.5 1.5 0 01-1.387 1.496l-.113.004h-9a1.5 1.5 0 01-1.495-1.387L3 14.25v-6h-.748c-.684 0-.999-.831-.527-1.286l.066-.057L8.08 2.016zM9 3.2L4.22 6.92a.755.755 0 01.281.589v6.742h2.25V10.5a2.25 2.25 0 014.5 0v3.75h2.25V7.508c0-.238.11-.45.281-.59L9.001 3.2zm0 6.55a.75.75 0 00-.75.75v3.75h1.5V10.5A.75.75 0 009 9.75z"
          fill="#2EC4B6"
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoHomeIcon = memo(HomeIcon);
export default MemoHomeIcon;
