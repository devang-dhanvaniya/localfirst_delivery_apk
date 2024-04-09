import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';

export interface FacebookIconProps extends IconProps {}
const FacebookIcon = (props: FacebookIconProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12.056c0 4.972 3.61 9.106 8.333 9.944v-7.223h-2.5V12h2.5V9.777c0-2.5 1.611-3.888 3.89-3.888.721 0 1.5.111 2.221.222v2.556h-1.277c-1.223 0-1.5.61-1.5 1.389V12h2.666l-.444 2.777h-2.222V22C18.389 21.162 22 17.028 22 12.056 22 6.525 17.5 2 12 2S2 6.525 2 12.056z"
          fill="#1A78F1"
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoFacebookIcon = memo(FacebookIcon);
export default MemoFacebookIcon;
