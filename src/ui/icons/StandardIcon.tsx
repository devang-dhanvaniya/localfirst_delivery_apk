import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface StandardIconProps extends IconProps {}
const StandardIcon = (props: StandardIconProps) => {
  const {
    pathStyles = {},
    size = 52,
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
        viewBox="0 0 52 52"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Circle cx={26} cy={26} r={26} fill="#EAEBFF" {...pathStyles?.[0]} />
        <Path
          d="M20.258 13.81a14.81 14.81 0 00-2.434.443l-.656.18v11.764c0 11.457 0 11.769.104 11.884.24.262.733.17.848-.164.043-.126.06-2.04.06-6.612v-6.437l.18-.033c1.154-.207 1.553-.262 2.286-.311 1.613-.11 3.396.098 4.944.58 2.045.634 2.86.809 4.244.896.957.066 2.061.017 3.002-.137.585-.098 1.848-.388 1.958-.459.054-.033-.449-.76-1.881-2.712-1.072-1.471-1.964-2.713-1.975-2.762-.016-.05.717-1.094 1.81-2.598 1.012-1.378 1.827-2.52 1.81-2.532-.01-.01-.284.044-.612.12-1 .236-1.63.312-2.871.345-1.821.05-3.172-.142-4.856-.689-2.242-.722-3.96-.94-5.961-.766z"
          fill="#7979FD"
          {...pathStyles?.[1]}
        />
      </Svg>
    </>
  );
};
const MemoAddCategoryIcon = memo(StandardIcon);
export default MemoAddCategoryIcon;
