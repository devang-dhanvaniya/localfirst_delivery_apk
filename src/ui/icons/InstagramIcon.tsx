import React, {memo} from 'react';
import {IconProps} from '.';
import {Defs, Path, RadialGradient, Rect, Stop, Svg} from 'react-native-svg';
import {Colors} from '../../constant';

export interface InstagramIconProps extends IconProps {}
const InstagramIcon = (props: InstagramIconProps) => {
  const {
    pathStyles = {},
    size = 24,
    stroke ='',
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
        <Rect
          width={24}
          height={24}
          rx={12}
          fill="url(#paint0_radial_390_4549)"
          {...pathStyles?.[0]}
        />
        <Path
          d="M12.002 6.098c1.924 0 2.15.008 2.91.043.703.031 1.083.148 1.338.248.337.132.577.286.829.538a2.2 2.2 0 01.537.829c.097.254.217.635.249 1.338.034.76.043.986.043 2.91 0 1.924-.009 2.15-.043 2.91-.032.703-.149 1.083-.249 1.338a2.234 2.234 0 01-.537.829 2.2 2.2 0 01-.83.537c-.254.098-.634.218-1.337.249-.76.034-.986.043-2.91.043-1.924 0-2.15-.009-2.91-.043-.704-.032-1.084-.149-1.338-.249a2.235 2.235 0 01-.83-.537 2.2 2.2 0 01-.537-.83c-.097-.254-.217-.634-.248-1.337-.035-.76-.043-.986-.043-2.91 0-1.924.008-2.15.043-2.91.031-.703.148-1.084.248-1.338.132-.337.286-.578.538-.83a2.2 2.2 0 01.829-.537c.254-.097.634-.217 1.338-.248.76-.037.989-.043 2.91-.043zm0-1.298c-1.956 0-2.201.009-2.97.043-.767.034-1.29.157-1.747.334a3.51 3.51 0 00-1.275.832c-.4.4-.646.804-.832 1.275-.177.458-.3.98-.334 1.75C4.809 9.8 4.8 10.046 4.8 12s.008 2.201.043 2.97c.034.766.157 1.29.334 1.75.183.474.432.874.832 1.275.4.4.803.646 1.275.832.457.177.98.3 1.75.334.768.034 1.011.043 2.97.043 1.958 0 2.2-.009 2.97-.043.766-.034 1.289-.157 1.75-.334a3.51 3.51 0 001.274-.832c.4-.4.646-.804.832-1.275.177-.458.3-.98.335-1.75.034-.769.042-1.012.042-2.97 0-1.958-.008-2.201-.042-2.97-.035-.766-.158-1.29-.335-1.75A3.51 3.51 0 0018 6.006c-.4-.4-.803-.646-1.275-.831-.457-.178-.98-.3-1.75-.335-.771-.031-1.017-.04-2.972-.04z"
          fill="#fff"
          {...pathStyles?.[1]}
        />
        <Path
          d="M12.002 8.305a3.7 3.7 0 10.001 7.399 3.7 3.7 0 00-.001-7.4zm0 6.097a2.401 2.401 0 110-4.802 2.401 2.401 0 010 4.802zM15.847 9.02a.863.863 0 100-1.727.863.863 0 000 1.726z"
          fill="#fff"
          {...pathStyles?.[2]}
        />
        <Defs {...pathStyles?.[3]}>
          <RadialGradient
            id="paint0_radial_390_4549"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(26.1504 0 0 26.1481 4.62 23.871)"
            {...pathStyles?.[4]}>
            <Stop stopColor="#09F" {...pathStyles?.[5]} />
            <Stop offset={0.6098} stopColor="#A033FF" {...pathStyles?.[6]} />
            <Stop offset={0.9348} stopColor="#FF5280" {...pathStyles?.[7]} />
            <Stop offset={1} stopColor="#FF7061" {...pathStyles?.[8]} />
          </RadialGradient>
        </Defs>
      </Svg>
    </>
  );
};
const MemoInstagramIcon = memo(InstagramIcon);
export default MemoInstagramIcon;
