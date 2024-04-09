import React, {memo} from 'react';
import {IconProps} from '.';
import { Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface StarIconProps extends IconProps {}
const StarIcon = (props: StarIconProps) => {
  const {
    pathStyles = {},
    size = 17,
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
        viewBox="0 0 17 17"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M8.5 1.417l2.19 4.434 4.894.715-3.542 3.45.836 4.873L8.5 12.587 4.123 14.89l.836-4.873-3.542-3.45 4.895-.715L8.5 1.417z"
          fill="#FFC727"
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoStarIcon = memo(StarIcon);
export default MemoStarIcon;
