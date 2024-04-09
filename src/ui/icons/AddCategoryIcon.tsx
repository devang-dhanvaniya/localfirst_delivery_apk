import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import { Colors } from '../../constant';

export interface AddCategoryIconProps extends IconProps {}
const AddCategoryIcon = (props: AddCategoryIconProps) => {
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
        <G
          clipPath="url(#clip0_1924_1001)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}>
          <Path
            d="M19.167 15c0 .625-.175 1.217-.484 1.717-.175.3-.4.566-.658.783a3.254 3.254 0 01-2.192.833 3.286 3.286 0 01-2.525-1.175c-.016-.025-.041-.041-.058-.066a2.359 2.359 0 01-.267-.375A3.268 3.268 0 0112.5 15c0-1.05.483-1.992 1.25-2.6a3.336 3.336 0 012.083-.733c.834 0 1.584.3 2.167.808.1.075.192.167.275.258.55.6.892 1.392.892 2.267zM17.075 14.983h-2.483M15.834 13.767v2.491"
            strokeMiterlimit={10}
            {...pathStyles?.[1]}
          />
          <Path
            d="M2.643 6.2L10 10.458l7.308-4.233M10 18.008V10.45"
            {...pathStyles?.[2]}
          />
          <Path
            d="M18.009 7.642v4.716c0 .042 0 .075-.009.117a3.267 3.267 0 00-2.166-.808c-.784 0-1.508.275-2.083.733A3.309 3.309 0 0012.5 15c0 .625.175 1.217.483 1.717.075.133.166.258.267.375l-1.525.841c-.95.534-2.5.534-3.45 0l-4.45-2.466c-1.009-.559-1.834-1.959-1.834-3.109V7.642c0-1.15.825-2.55 1.834-3.109l4.45-2.466c.95-.534 2.5-.534 3.45 0l4.45 2.466c1.008.559 1.833 1.959 1.833 3.109z"
            {...pathStyles?.[3]}
          />
        </G>
        <Defs {...pathStyles?.[4]}>
          <ClipPath id="clip0_1924_1001" {...pathStyles?.[5]}>
            <Path fill="#fff" d="M0 0H20V20H0z" {...pathStyles?.[6]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoAddCategoryIcon = memo(AddCategoryIcon);
export default MemoAddCategoryIcon;
