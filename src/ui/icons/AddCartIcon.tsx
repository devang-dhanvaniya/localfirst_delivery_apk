import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

export interface AddCartIconProps extends IconProps {}
const AddCartIcon = (props: AddCartIconProps) => {
  const {
    pathStyles = {},
    size = 26,
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
        viewBox="0 0 26 26"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Rect
          x={0.5}
          y={0.5}
          width={25}
          height={25}
          rx={12.5}
          fill="#fff"
          {...pathStyles?.[0]}
        />
        <Rect
          x={0.5}
          y={0.5}
          width={25}
          height={25}
          rx={12.5}
          stroke="#EDEDED"
          {...pathStyles?.[1]}
        />
        <G clipPath="url(#clip0_602_1155)" {...pathStyles?.[2]}>
          <Path
            d="M11.25 17.667a.583.583 0 110 1.167.583.583 0 010-1.167zm4.084 0a.583.583 0 110 1.167.583.583 0 010-1.167zM8.039 7.535l.061.04.997.747c.17.128.301.299.38.495l.036.1h7.493a1.166 1.166 0 011.166 1.225l-.008.086-.266 2.132a2.917 2.917 0 01-2.52 2.532l-.132.013-4.266.356.152.656h5.077a.583.583 0 01.068 1.162l-.068.004h-5.077a1.167 1.167 0 01-1.112-.812l-.025-.092-1.599-6.924-.996-.747a.583.583 0 01.575-1.005l.064.032zm8.967 2.548H9.785l.93 4.029 4.433-.37a1.75 1.75 0 001.592-1.526l.266-2.133z"
            fill="#101010"
            {...pathStyles?.[3]}
          />
        </G>
        <Defs {...pathStyles?.[4]}>
          <ClipPath id="clip0_602_1155" {...pathStyles?.[5]}>
            <Path
              fill="#fff"
              transform="translate(6 6)"
              d="M0 0H14V14H0z"
              {...pathStyles?.[6]}
            />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoAddCartIcon = memo(AddCartIcon);
export default MemoAddCartIcon;
