import React, {memo} from 'react';
import {IconProps} from './index';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface MessageIconProps extends IconProps {}
const MessageIcon = (props: MessageIconProps) => {
  const {
    pathStyles = {},
    size = 24,
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
        <G clipPath="url(#clip0_2421_1066)" {...pathStyles?.[0]}>
          <Path
            d="M19 3a3 3 0 013 3v10a3 3 0 01-3 3H7.333L4 21.5c-.824.618-2 .03-2-1V6a3 3 0 013-3h14zm0 2H5a1 1 0 00-1 1v13l2.133-1.6a2 2 0 011.2-.4H19a1 1 0 001-1V6a1 1 0 00-1-1zm-8 7a1 1 0 01.117 1.993L11 14H8a1 1 0 01-.117-1.993L8 12h3zm5-4a1 1 0 110 2H8a1 1 0 010-2h8z"
            fill="#09244B"
            {...pathStyles?.[1]}
          />
        </G>
        <Defs {...pathStyles?.[2]}>
          <ClipPath id="clip0_2421_1066" {...pathStyles?.[3]}>
            <Path fill="#fff" d="M0 0H24V24H0z" {...pathStyles?.[4]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoMessageIcon = memo(MessageIcon);
export default MemoMessageIcon;
