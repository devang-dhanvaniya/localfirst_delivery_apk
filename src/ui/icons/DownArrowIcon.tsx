import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';

export interface DownArrowIconProps extends IconProps {}
const DownArrowIcon = (props: DownArrowIconProps) => {
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
        <G clipPath="url(#clip0_2421_782)" {...pathStyles?.[0]}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.465 10.293a1 1 0 011.414 0l2.12 2.121 2.122-2.12a1 1 0 011.415 1.413l-2.83 2.83a1 1 0 01-1.413 0l-2.828-2.83a1 1 0 010-1.414z"
            fill="#878787"
            {...pathStyles?.[1]}
          />
        </G>
        <Defs {...pathStyles?.[2]}>
          <ClipPath id="clip0_2421_782" {...pathStyles?.[3]}>
            <Path fill="#fff" d="M0 0H24V24H0z" {...pathStyles?.[4]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoDownArrowIcon = memo(DownArrowIcon);
export default MemoDownArrowIcon;
