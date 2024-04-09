import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface TwitterIconProps extends IconProps {}
const TwitterIcon = (props: TwitterIconProps) => {
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
        <Rect width={size} height={size} rx={12} fill="#1D9BF0" />
        <Path
          d="M9.804 18.33c5.322 0 8.232-4.41 8.232-8.232 0-.126 0-.252-.006-.372a5.927 5.927 0 001.446-1.5 5.872 5.872 0 01-1.662.456c.6-.36 1.056-.924 1.272-1.602-.558.33-1.176.57-1.836.702a2.894 2.894 0 00-4.926 2.64A8.208 8.208 0 016.36 7.398c-.246.426-.39.924-.39 1.452 0 1.002.51 1.89 1.29 2.406a2.842 2.842 0 01-1.308-.36v.036c0 1.404.996 2.568 2.322 2.838a2.884 2.884 0 01-1.308.048 2.889 2.889 0 002.7 2.01 5.816 5.816 0 01-4.284 1.194 8.06 8.06 0 004.422 1.308z"
          fill="#fff"
        />
      </Svg>
    </>
  );
};
const MemoTwitterIcon = memo(TwitterIcon);
export default MemoTwitterIcon;
