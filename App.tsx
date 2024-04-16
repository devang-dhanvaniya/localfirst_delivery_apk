import {StatusBar} from 'react-native';
import React, {useLayoutEffect} from 'react';

// PROJECT IMPORT
import {requestStoragePermission} from './src/commonFunctions/permissionFunctions';
import navigationServices from './src/navigations/navigationServices';
import {AppNavigator} from './src/navigations';
import {AuthProvider} from './src/hooks';
import store from './src/redux/store';

// THIRD - PARTY IMPORT
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

function App(): React.JSX.Element {
  useLayoutEffect(() => {
    requestStoragePermission();
  }, []);

  return (
    <>
      <StatusBar translucent barStyle={'dark-content'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <PaperProvider>
            <AuthProvider>
              <Provider store={store}>
                <NavigationContainer
                  ref={navigationRef => {
                    navigationServices.setTopLevelNavigator(navigationRef);
                  }}>
                  <AppNavigator />
                </NavigationContainer>
              </Provider>
            </AuthProvider>
          </PaperProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
