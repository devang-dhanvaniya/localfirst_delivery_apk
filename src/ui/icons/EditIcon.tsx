import React, {memo} from 'react';
import {IconProps} from '.';
import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface EditIconProps extends IconProps {}
const EditIcon = (props: EditIconProps) => {
  const {
    pathStyles = {},
    size = 20,
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
        viewBox="0 0 20 20"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...rest}>
        <G clipPath="url(#clip0_2511_136)" {...pathStyles?.[0]}>
          <Path
            d="M13.362 2.513a2.5 2.5 0 013.416-.113l.12.113.589.589a2.5 2.5 0 01.112 3.415l-.112.12-9.343 9.344a1.25 1.25 0 01-.469.295l-.135.04-3.711.856a.836.836 0 01-1.017-.907l.017-.094.855-3.712a1.25 1.25 0 01.242-.499l.093-.104 9.343-9.343zm-.59 2.946l-7.49 7.491-.53 2.299 2.297-.531 7.492-7.492-1.768-1.767zM15.72 3.69a.833.833 0 00-1.1-.07l-.078.07-.59.59 1.768 1.767.59-.59a.833.833 0 00.069-1.1l-.07-.078-.589-.589z"
            fill={Colors.SECONDRAY}
            {...pathStyles?.[1]}
          />
        </G>
        <Defs {...pathStyles?.[2]}>
          <ClipPath id="clip0_2511_136" {...pathStyles?.[3]}>
            <Path fill="#fff" d="M0 0H20V20H0z" {...pathStyles?.[4]} />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
const MemoEditIcon = memo(EditIcon);
export default MemoEditIcon;
