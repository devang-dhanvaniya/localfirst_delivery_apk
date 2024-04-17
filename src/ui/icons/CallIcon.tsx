import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface CallIconProps extends IconProps {}
const CallIcon = (props: CallIconProps) => {
  const {
    pathStyles = {},
    size = 24,
    stroke = "",
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
        <G clipPath="url(#clip0_2421_1062)" {...pathStyles?.[0]}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.173 15.83c3.845 3.844 7.408 4.266 8.454 4.304 1.264.046 2.554-.986 3.112-2.043-.89-1.044-2.049-1.854-3.318-2.732-.749.749-1.672 2.138-2.901 1.64-.699-.28-2.425-1.075-3.933-2.584-1.509-1.508-2.303-3.234-2.586-3.932-.498-1.232.896-2.157 1.645-2.906-.878-1.29-1.674-2.479-2.716-3.324-1.072.56-2.11 1.84-2.063 3.121.039 1.046.46 4.61 4.306 8.456zm8.38 6.304c-1.44-.053-5.521-.617-9.795-4.89-4.273-4.274-4.836-8.355-4.89-9.796-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 011.445.16c1.608 1.172 2.717 2.95 3.67 4.341a1.504 1.504 0 01-.177 1.913l-1.356 1.357c.315.695.956 1.893 2.006 2.944 1.05 1.05 2.248 1.69 2.944 2.006L15.3 13.65a1.502 1.502 0 011.918-.17c1.42.983 3.088 2.076 4.304 3.633a1.47 1.47 0 01.189 1.486c-.837 1.953-2.955 3.616-5.158 3.535z"
            {...pathStyles?.[1]}
          />
        </G>
        <Defs {...pathStyles?.[2]}>
          <ClipPath id="clip0_2421_1062" {...pathStyles?.[3]}>
            <Path fill="#fff" d="M0 0H24V24H0z" {...pathStyles?.[4]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoCallIcon = memo(CallIcon);
export default MemoCallIcon;
