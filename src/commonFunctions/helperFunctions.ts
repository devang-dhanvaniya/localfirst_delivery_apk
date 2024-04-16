import {Dimensions} from 'react-native';

// PROJECT IMPORT
import {BaseUrl, Common} from '../constant';

// THIRD - PARTY IMPORT
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (
  key: string,
  value: any,
  defaultValue: any = {},
) => {
  await AsyncStorage.setItem(key, JSON.stringify(value || defaultValue));
};

export const clearAllAsyncStorage = async () => {
  await AsyncStorage.clear();
};

export const removeAsyncStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const getAsyncStorage = async (
  key: string,
  defaultValue: any = '{}',
) => {
  return JSON.parse((await AsyncStorage.getItem(key)) || defaultValue);
};

export const onFixed = (amount: number, decimal = Common.FIXED_DECIMAL) => {
  return +(+amount || 0)?.toFixed(decimal);
};

const initialZeroes = Array.from({length: Common.FIXED_DECIMAL})?.reduce(
  t => t + '0',
  '',
);

export const seperator = (amount: number, isRupee = true) => {
  const isNagative = amount?.toString()?.[0] === '-';

  const f = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: Common.FIXED_DECIMAL,
  });

  let newAmount = f.format(onFixed(+Math.abs(+amount)) || 0);

  const newAmounts = newAmount?.split('.');
  const isAllZeores = (newAmounts?.[1] || '') === initialZeroes;

  if (isAllZeores) {
    newAmount = newAmounts?.[0];
  }
  newAmount = `${isNagative ? '- ' : ''}${
    isRupee && !isNagative ? '₹ ' : ''
  }${newAmount?.slice(1)}`;

  return newAmount;
};

export const prepareImageUrl = (uri: string) => {
  return {
    uri: `${BaseUrl.BASE_URL}${BaseUrl.IMAGE_MIDDLEWARE}/${uri}`,
  };
};

export const preparePaginateData = (
  action: any,
  items: any,
  initialItems: any,
  dataKey = 'data',
) => {
  const arg = action?.meta?.arg?.originalArgs;

  const isInitial = +arg?.page_no === 1;

  const newItems = isInitial
    ? action?.payload?.data
    : [...(items?.[dataKey] || [])];

  if (!isInitial) {
    const index = +arg?.page_no * +arg?.limit - +arg?.limit;
    newItems.splice(index, arg?.limit, ...(action?.payload?.data || []));
  }

  return action?.payload
    ? {...(items || {}), [dataKey]: newItems}
    : {
        ...(initialItems || {}),
        [dataKey]: [],
      };
};

export const prepareResponse = (data: any) => {
  return {
    ...(data
      ? {
          ...data,
          message: data?.message
            ? data?.message
            : !data?.status
            ? 'Something went wrong!'
            : 'Success',
        }
      : {}),
    isToast: true,
  };
};

export const dateFormatter = (d: any, type: any = 'start'): string => {
  if (!d) {
    return '';
  }
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const wp = (percentage = 0) => {
  if (Dimensions.get('window').width > Dimensions.get('window').height) {
    return (Dimensions.get('window').height * percentage) / 100;
  }
  return (Dimensions.get('window').width * percentage) / 100;
};

export const hp = (percentage = 0) => {
  if (Dimensions.get('window').width > Dimensions.get('window').height) {
    return (Dimensions.get('window').width * percentage) / 100;
  }
  return (Dimensions.get('window').height * percentage) / 100;
};
