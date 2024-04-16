import React, {PropsWithChildren, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';

// PROJECT IMPORT
import {BaseUrl, Colors, Storage} from '../constant';
import {
  clearAllAsyncStorage,
  getAsyncStorage,
  hp,
  setAsyncStorage,
  wp,
} from '../commonFunctions';

// THIRD - PARTY IMPORT
import {ActivityIndicator} from 'react-native-paper';
import {ResToast, initialResToast} from '../features/common';
import {Toast} from '../ui';

interface AuthProviderProps extends PropsWithChildren<{}> {}
interface AuthContextTypes {
  user: any;
  isLoading: boolean;
  resToast: ResToast;
  setResToast: React.Dispatch<React.SetStateAction<ResToast>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  onLogin: (payload: any) => Promise<void>;
  // onForgotPassword: (payload: any) => Promise<void>;
  clearAuth: () => void;
}
// eslint-disable-next-line
export const AuthContext = React.createContext<AuthContextTypes | null>(null);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resToast, setResToast] = useState<ResToast>(initialResToast);

  const onLogin = async (payload: any) => {
    try {
      const response = await fetch(
        `${BaseUrl.BASE_URL}${BaseUrl.DELIVERY_PERSON}/delivery-person-login`,
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const res: any = await response.json();

      await setAsyncStorage(Storage.USER, res?.data || {});
      setUser(res?.data || {});

      return res;
    } catch (err: any) {
      return err?.data;
    }
  };

  // const onForgotPassword = async (payload: any) => {
  //   try {
  //     const response = await fetch(
  //       `${BaseUrl.BASE_URL}${BaseUrl.VENDOR}/forgot-password`,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify(payload),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     const res: any = await response.json();

  //     await setAsyncStorage(Storage.USER, res?.data || {});
  //     setUser(res?.data || {});

  //     return res;
  //   } catch (err: any) {
  //     return err?.data;
  //   }
  // };

  const clearAuth = async () => {
    setIsLoading(true);
    setUser(null);
    await clearAllAsyncStorage();
    setIsLoading(false);
  };

  const onSetInitialUserData = async () => {
    try {
      const data = await getAsyncStorage(Storage.USER);
      setUser(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    onSetInitialUserData();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(100),
          height: hp(100),
        }}>
        <ActivityIndicator size="large" color={Colors.YELLOW} />
      </View>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          isLoading,
          resToast,
          setResToast,
          onLogin,
          clearAuth,
          setUser,
          setIsLoading,
          // onForgotPassword,
        }}>
        <Toast resToast={resToast} setResToast={setResToast} />
        {children}
      </AuthContext.Provider>
    </>
  );
};

export {AuthProvider};
