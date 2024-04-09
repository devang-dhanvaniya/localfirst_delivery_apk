import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Rect, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface AddWishlistProps extends IconProps {}
const AddWishlist = (props: AddWishlistProps) => {
  const {
    pathStyles = {},
    size = 26,
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
        viewBox="0 0 26 26"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Rect
          x={0.5}
          y={0.5}
          width={25}
          height={25}
          rx={12.5}
          fill="#fff"
          {...pathStyles?.[0]}
        />
        <Rect
          x={0.5}
          y={0.5}
          width={25}
          height={25}
          rx={12.5}
          stroke="#EDEDED"
          {...pathStyles?.[1]}
        />
        <Path
          d="M13.362 18.14c-.198.07-.525.07-.723 0-1.692-.578-5.472-2.988-5.472-7.07a3.251 3.251 0 013.243-3.262c1.062 0 2.001.514 2.59 1.307a3.226 3.226 0 012.59-1.307 3.251 3.251 0 013.244 3.261c0 4.083-3.78 6.493-5.472 7.07z"
          stroke="#101010"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
      </Svg>
    </>
  );
};
const MemoAddWishlist = memo(AddWishlist);
export default MemoAddWishlist;
