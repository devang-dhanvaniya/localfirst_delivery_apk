import React, {memo} from 'react';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {IconProps} from '.';
import { Colors } from '../../constant';

export interface DashboardIconProps extends IconProps {}
const DashboardIcon = (props: DashboardIconProps) => {
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
          clipPath="url(#clip0_1924_778)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}>
          <Path
            d="M15.267 10c2.166 0 3.066-.833 2.266-3.567-.541-1.841-2.125-3.425-3.966-3.966-2.734-.8-3.567.1-3.567 2.266v2.4C10 9.167 10.833 10 12.5 10h2.767z"
            {...pathStyles?.[1]}
          />
          <Path
            d="M16.667 12.25a7.576 7.576 0 01-8.683 5.975c-3.158-.508-5.7-3.05-6.217-6.208a7.584 7.584 0 015.95-8.675"
            {...pathStyles?.[2]}
          />
        </G>
        <Defs {...pathStyles?.[3]}>
          <ClipPath id="clip0_1924_778" {...pathStyles?.[4]}>
            <Path fill={Colors.BLACK} d="M0 0H20V20H0z" {...pathStyles?.[5]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoDashboardIcon = memo(DashboardIcon);
export default MemoDashboardIcon;
