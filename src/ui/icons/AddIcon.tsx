import React, {memo} from 'react';
import {IconProps} from '.';
import {Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface AddIconProps extends IconProps {}

const AddIcon = (props: AddIconProps) => {
  const {
    pathStyles = {},
    size = 20,
    stroke = Colors.SECONDRAY,
    fill = 'none',
    strokeWidth = 1.5,
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
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}>
        <Path d="M5 12h14M12 5v14" {...pathStyles?.[0]} />
      </Svg>
    </>
  );
};
const MemoAddIcon = memo(AddIcon);
export default MemoAddIcon;
