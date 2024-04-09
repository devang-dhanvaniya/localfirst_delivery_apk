import React, {memo} from 'react';
import {IconProps} from '.';
import {Circle, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface PremiumIconProps extends IconProps {}
const PremiumIcon = (props: PremiumIconProps) => {
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
        <Circle cx={26} cy={26} r={26} fill="#fff" {...pathStyles?.[0]} />
        <Path
          d="M25.65 14.023a1.746 1.746 0 00-.334.17c-.109.077-1.132 1.46-2.652 3.588-1.362 1.903-2.494 3.461-2.521 3.461-.027 0-1.154-.733-2.5-1.63-1.345-.902-2.542-1.667-2.657-1.706-.317-.104-.771-.038-1.04.148-.245.17-.524.645-.524.891 0 .077.443 3.883.979 8.455.667 5.66 1.006 8.367 1.06 8.477.105.196.34.42.57.535.158.083 1.066.088 9.969.088 9.587 0 9.8 0 10.002-.104.285-.148.52-.432.596-.722.033-.131.498-3.943 1.029-8.47 1.055-9.002 1.017-8.488.705-8.893-.29-.377-.864-.552-1.318-.405-.115.039-1.312.804-2.658 1.707-1.345.896-2.472 1.63-2.499 1.63-.022 0-1.143-1.537-2.488-3.419-1.346-1.881-2.5-3.472-2.565-3.533-.273-.262-.798-.382-1.154-.268zm.87 10.91c1.454.383 2.187 1.915 1.536 3.227a2.44 2.44 0 01-1.115 1.1c-.454.218-1.182.25-1.668.076-.635-.23-1.083-.634-1.362-1.241a2.283 2.283 0 01.142-2.139 2.469 2.469 0 011.406-1.017 1.892 1.892 0 011.06-.005z"
          fill="#2EC4B6"
          {...pathStyles?.[1]}
        />
      </Svg>
    </>
  );
};
const MemoPremiumIcon = memo(PremiumIcon);
export default MemoPremiumIcon;
