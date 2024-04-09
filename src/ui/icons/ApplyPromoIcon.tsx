import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface ApplyPromoIconProps extends IconProps {}
const ApplyPromoIcon = (props: ApplyPromoIconProps) => {
  const {
    pathStyles = {},
    size = 20,
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
        viewBox="0 0 20 20"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          d="M16.25 9.583c0 1.15.934 2.084 2.084 2.084v.833c0 3.333-.834 4.167-4.167 4.167H5.834c-3.334 0-4.167-.834-4.167-4.167v-.417a2.084 2.084 0 000-4.166V7.5c0-3.333.833-4.167 4.167-4.167h8.333c3.333 0 4.167.834 4.167 4.167-1.15 0-2.084.933-2.084 2.083zM7.5 7.708l5 5"
          stroke="#878787"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}
        />
        <Path
          d="M12.495 7.708h.008M7.495 12.292h.008"
          stroke="#878787"
          strokeWidth={1.66667}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
      </Svg>
    </>
  );
};
const MemoApplyPromoIcon = memo(ApplyPromoIcon);
export default MemoApplyPromoIcon;
