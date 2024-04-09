import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface InvoiceIconProps extends IconProps {}
const InvoiceIcon = (props: InvoiceIconProps) => {
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
        <Path
          d="M18.334 5v2.017c0 1.316-.833 2.15-2.15 2.15h-2.85V3.342c0-.925.758-1.675 1.683-1.675a3.35 3.35 0 012.342.975c.6.608.975 1.441.975 2.358z"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[0]}
        />
        <Path
          d="M1.666 5.833V17.5a.83.83 0 001.333.667L4.424 17.1a.84.84 0 011.1.083l1.384 1.392a.84.84 0 001.183 0l1.4-1.4a.826.826 0 011.083-.075L12 18.167a.835.835 0 001.334-.667V3.333c0-.916.75-1.666 1.666-1.666H5C2.5 1.667 1.666 3.158 1.666 5v.833z"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[1]}
        />
        <Path
          d="M5 7.5h5M5.625 10.833h3.75"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathStyles?.[2]}
        />
      </Svg>
    </>
  );
};
const MemoInvoiceIcon = memo(InvoiceIcon);
export default MemoInvoiceIcon;
