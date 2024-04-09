import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface DeleteIconProps extends IconProps {}
const DeleteIcon = (props: DeleteIconProps) => {
  const {
    pathStyles = {},
    size = 20,
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
        viewBox="0 0 20 20"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <G clipPath="url(#clip0_2386_1492)" {...pathStyles?.[0]}>
          <Path
            d="M11.9 1.667a1.667 1.667 0 011.58 1.14l.453 1.36h2.734a.833.833 0 010 1.667l-.003.059-.722 10.119a2.5 2.5 0 01-2.494 2.322H6.552a2.5 2.5 0 01-2.494-2.322l-.722-10.12a.847.847 0 01-.003-.058.833.833 0 010-1.667h2.734l.452-1.36a1.667 1.667 0 011.582-1.14H11.9zm3.098 4.167H5.003l.718 10.059a.833.833 0 00.83.774h6.897a.833.833 0 00.831-.774l.719-10.06zm-6.665 2.5a.833.833 0 01.828.735l.006.098v4.167a.833.833 0 01-1.661.097l-.006-.097V9.167a.833.833 0 01.833-.833zm3.334 0a.833.833 0 01.833.833v4.167a.833.833 0 01-1.667 0V9.167a.833.833 0 01.834-.833zm.233-5H8.1l-.277.833h4.354l-.277-.833z"
            fill="#2EC4B6"
            {...pathStyles?.[1]}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_2386_1492" {...pathStyles?.[2]}>
            <Path fill="#fff" d="M0 0H20V20H0z" {...pathStyles?.[3]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoDeleteIcon = memo(DeleteIcon);
export default MemoDeleteIcon;
