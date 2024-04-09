import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface ProductIconProps extends IconProps {}
const ProductIcon = (props: ProductIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = Colors.BLACK,
    fill = 'none',
    strokeWidth = 1,
    style,
    ...rest
  } = props;

  const preparePathStyles = (key: any) => ({
    ...pathStyles?.['All'],
    ...pathStyles?.[key],
  });

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
        <G clipPath="url(#clip0_1924_870)" {...preparePathStyles?.([0])}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.583 2.5a1.667 1.667 0 011.333.667l2.24 2.986a.829.829 0 01.17.514h.007V7.5c0 .845-.315 1.617-.834 2.205v6.128a1.666 1.666 0 01-1.666 1.667H4.166a1.667 1.667 0 01-1.667-1.667V9.705A3.32 3.32 0 011.666 7.5v-.833h.007a.83.83 0 01.17-.514l2.24-2.986A1.667 1.667 0 015.416 2.5h9.167zm-2.084 7.205a3.326 3.326 0 01-2.5 1.128 3.325 3.325 0 01-2.5-1.128 3.326 3.326 0 01-3.13 1.068l-.203-.045v5.105h11.667v-5.105l-.203.045a3.324 3.324 0 01-3.13-1.068zM16.666 7.5h-3.333a1.667 1.667 0 003.329.125l.004-.125zm-5 0H8.333a1.667 1.667 0 003.329.125l.004-.125zm-5 0H3.333a1.667 1.667 0 003.329.125l.004-.125zm7.917-3.333H5.416l-1.25 1.666h11.667l-1.25-1.666z"
            {...preparePathStyles?.([1])}
          />
        </G>
        <Defs {...preparePathStyles?.([2])}>
          <ClipPath id="clip0_1924_870" {...preparePathStyles?.([3])}>
            <Path fill="#fff" d="M0 0H20V20H0z" {...preparePathStyles?.([4])} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoProductIcon = memo(ProductIcon);
export default MemoProductIcon;
