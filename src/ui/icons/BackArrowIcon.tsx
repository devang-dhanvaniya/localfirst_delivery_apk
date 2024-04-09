import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Rect, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface BackArrowIconProps extends IconProps {}
const BackArrowIcon = (props: BackArrowIconProps) => {
  const {
    pathStyles = {},
    size = 32,
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
        viewBox="0 0 32 32"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Rect
          x={0.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          fill="#fff"
          {...pathStyles?.[0]}
        />
        <Rect
          x={0.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          stroke="#EDEDED"
          {...pathStyles?.[1]}
        />
        <Path
          d="M18.5 21.833L12.667 16l5.833-5.833"
          stroke="#101010"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
      </Svg>
    </>
  );
};
const MemoBackArrowIcon = memo(BackArrowIcon);
export default MemoBackArrowIcon;
