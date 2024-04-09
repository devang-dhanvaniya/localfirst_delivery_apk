import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface RemoveIconProps extends IconProps {}
const RemoveIcon = (props: RemoveIconProps) => {
  const {
    pathStyles = {},
    size = 14,
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
        viewBox="0 0 14 14"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Circle cx={7} cy={7} r={7} fill="#2EC4B6" {...pathStyles?.[0]} />
        <G clipPath="url(#clip0_2577_135)" {...pathStyles?.[1]}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 7a.333.333 0 01.333-.333h5.334a.333.333 0 010 .667H4.333A.333.333 0 014 7z"
            fill="#fff"
            {...pathStyles?.[2]}
          />
        </G>
        <Defs {...pathStyles?.[3]}>
          <ClipPath id="clip0_2577_135" {...pathStyles?.[4]}>
            <Path
              fill="#fff"
              transform="translate(3 3)"
              d="M0 0H8V8H0z"
              {...pathStyles?.[5]}
            />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoRemoveIcon = memo(RemoveIcon);
export default MemoRemoveIcon;
