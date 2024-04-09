import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';

export interface CheckIconProps extends IconProps {}
const CheckIcon = (props: CheckIconProps) => {
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
        <G clipPath="url(#clip0_2386_1488)" {...pathStyles?.[0]}>
          <Path
            d="M10 1.667a8.333 8.333 0 110 16.667 8.333 8.333 0 110-16.667zm0 1.667a6.667 6.667 0 100 13.333 6.667 6.667 0 000-13.333zm2.945 3.65a.833.833 0 011.248 1.1l-.069.079-4.655 4.656a.917.917 0 01-1.216.07l-.08-.07-2.299-2.299a.833.833 0 011.1-1.248l.079.07L8.82 11.11l4.125-4.126z"
            fill="#2EC4B6"
            {...pathStyles?.[1]}
          />
        </G>
        <Defs {...pathStyles?.[2]}>
          <ClipPath id="clip0_2386_1488" {...pathStyles?.[3]}>
            <Path fill="#fff" d="M0 0H20V20H0z" {...pathStyles?.[4]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoCheckIcon = memo(CheckIcon);
export default MemoCheckIcon;
