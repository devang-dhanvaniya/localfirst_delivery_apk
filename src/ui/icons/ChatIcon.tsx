import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface ChatIconProps extends IconProps {}
const ChatIcon = (props: ChatIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = Colors.BLACK,
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
        viewBox="0 0 20 20"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M7.083 15.833h-.417c-3.333 0-5-.833-5-5V6.667c0-3.334 1.667-5 5-5h6.667c3.333 0 5 1.666 5 5v4.166c0 3.334-1.667 5-5 5h-.417a.845.845 0 00-.667.334L11 17.833c-.55.734-1.45.734-2 0l-1.25-1.666c-.133-.184-.441-.334-.666-.334z"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}
        />
        <Path
          d="M5.834 6.667h8.333M5.834 10.833h5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
      </Svg>
    </>
  );
};
const MemoChatIcon = memo(ChatIcon);
export default MemoChatIcon;
