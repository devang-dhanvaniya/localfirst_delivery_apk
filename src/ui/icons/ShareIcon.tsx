import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface ShareIconProps extends IconProps {}
const ShareIcon = (props: ShareIconProps) => {
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
        <Circle
          cx={16}
          cy={16}
          r={15.5}
          fill="#fff"
          stroke="#EDEDED"
          {...pathStyles?.[0]}
        />
        <G clipPath="url(#clip0_607_14843)" {...pathStyles?.[1]}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.417 7.667a2.917 2.917 0 11-2.089 4.952l-3.603 1.89c.178.462.275.966.275 1.491 0 .51-.092 1.016-.275 1.492l3.603 1.889a2.917 2.917 0 11-.774 1.476l-3.73-1.955a4.167 4.167 0 110-5.803l3.73-1.956a2.917 2.917 0 012.863-3.476zm0 12.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM11.833 13.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm9.584-4.167a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
            fill="#101010"
            {...pathStyles?.[2]}
          />
        </G>
        <Defs {...pathStyles?.[3]}>
          <ClipPath id="clip0_607_14843" {...pathStyles?.[4]}>
            <Path
              fill="#fff"
              transform="translate(6 6)"
              d="M0 0H20V20H0z"
              {...pathStyles?.[5]}
            />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoShareIcon = memo(ShareIcon);
export default MemoShareIcon;
