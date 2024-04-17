import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Rect, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface AddCircleIconProps extends IconProps {}
const AddCircleIcon = (props: AddCircleIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = Colors.SECONDARY,
    fill = 'none',
    strokeWidth = 1.5,
    style,
    ...rest
  } = props;
  return (
    <>
      <Svg
        width={size}
        height={size}
        fill={fill}
        viewBox="0 0 20 20"
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Rect
          x={0.5}
          y={0.5}
          width={19}
          height={19}
          rx={9.5}
          fill="#FFEACC"
          stroke="#FF9F1C"
          {...pathStyles?.[0]}
        />
        <Path
          d="M6.668 10h6.667M10 13.333V6.666"
          stroke="#FF9F1C"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
      </Svg>
    </>
  );
};
const MemoAddCircleIcon = memo(AddCircleIcon);
export default MemoAddCircleIcon;
