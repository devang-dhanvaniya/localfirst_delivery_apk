import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface LogoProps extends IconProps {}
const Logo = (props: LogoProps) => {
  const {
    pathStyles = {},
    size = 28,
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
        viewBox="0 0 24 28"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.137.666c.057 0 .113.005.168.014l.18.001c.272 0 .532.11.722.307l6.754 7.036c.178.185.278.435.278.692v12.253a6.125 6.125 0 01-5.938 6.184H6.448a6.084 6.084 0 01-5.944-5.92V6.653C.583 3.345 3.314.681 6.596.681h8.372c.055-.01.111-.015.169-.015zm-1.001 2.015H6.6c-2.21 0-4.044 1.79-4.096 3.996V20.97c-.048 2.268 1.739 4.135 3.985 4.184h10.778c2.225-.08 3.986-1.916 3.972-4.177v-11l-2.678.002a4.441 4.441 0 01-4.424-4.433l-.001-2.864zm-2.778 7.53c.276 0 .526.112.707.293l.001.001 3.128 3.141a1 1 0 01-1.417 1.411l-1.42-1.426v5.635a1 1 0 01-2 0V13.63L8.94 15.057a.995.995 0 01-1.413.003.999.999 0 01-.003-1.414l3.125-3.14.044-.042.06-.05-.104.091a.99.99 0 01.709-.294zm4.778-6.409v1.743a2.437 2.437 0 002.427 2.433l1.58-.001-4.007-4.175z"
          fill={Colors.SECONDRAY}
          {...pathStyles?.[0]}
        />
      </Svg>
    </>
  );
};
const MemoLogo = memo(Logo);
export default MemoLogo;
