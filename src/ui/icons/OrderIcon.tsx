import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface ManageOrderIconProps extends IconProps {}
const ManageOrderIcon = (props: ManageOrderIconProps) => {
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
          d="M2.643 6.2L10 10.458l7.308-4.233M10 18.008V10.45"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}
        />
        <Path
          d="M8.275 2.067l-4.45 2.475C2.818 5.1 1.993 6.5 1.993 7.65v4.708c0 1.15.825 2.55 1.834 3.109l4.45 2.475c.95.525 2.508.525 3.458 0l4.45-2.475c1.008-.559 1.833-1.959 1.833-3.109V7.65c0-1.15-.825-2.55-1.833-3.108l-4.45-2.475c-.959-.534-2.508-.534-3.459 0z"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
        <Path
          d="M14.166 11.033v-3.05L6.258 3.417"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
      </Svg>
    </>
  );
};
const MemoManageOrderIcon = memo(ManageOrderIcon);
export default MemoManageOrderIcon;
