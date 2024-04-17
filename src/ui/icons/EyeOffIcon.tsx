import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface EyeOffIconProps extends IconProps {}
const EyeOffIcon = (props: EyeOffIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = Colors.SECONDARY,
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
        viewBox="0 0 20 20"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M2.5 2.5l2.991 2.991M17.501 17.5l-2.991-2.99m-2.947 1.177A8.337 8.337 0 012.049 10c.289-.92.733-1.772 1.302-2.524m4.882.756a2.5 2.5 0 013.536 3.536M8.232 8.232l3.535 3.536M8.233 8.232L5.49 5.491m6.277 6.277L5.491 5.49m6.277 6.277l2.742 2.741M5.49 5.491A8.337 8.337 0 0117.952 10a8.353 8.353 0 01-3.442 4.51"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoEyeOffIcon = memo(EyeOffIcon);
export default MemoEyeOffIcon;
