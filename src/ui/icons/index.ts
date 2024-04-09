// UI IMPORT
import * as iconComponents from './icons';

export {iconComponents};
export type IconKeys = keyof typeof iconComponents;

export {default as Icon} from './Icon';

export interface IconProps {
  pathStyles?: any;
  name?: IconKeys;
  onPress?: (e?: any) => void;
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  style?: any;
  pressStyle?: any;
  className?:any;
}
