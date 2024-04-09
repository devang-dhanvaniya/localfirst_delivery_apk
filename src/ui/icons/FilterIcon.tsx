import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface FilterIconProps extends IconProps {}
const FilterIcon = (props: FilterIconProps) => {
  const {
    pathStyles = {},
    size = 16,
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
        viewBox="0 0 16 16"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M8 3.667a1.667 1.667 0 01-3.333 0m3.333 0a1.667 1.667 0 10-3.333 0m3.333 0h6m-9.333 0H2M12.667 8a1.667 1.667 0 01-3.334 0m3.334 0a1.667 1.667 0 00-3.334 0m3.334 0H14M9.333 8H2m4.667 4.333a1.667 1.667 0 11-3.334 0m3.334 0a1.667 1.667 0 00-3.334 0m3.334 0H14m-10.667 0H2"
          stroke="#807A7A"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoFilterIcon = memo(FilterIcon);
export default MemoFilterIcon;
