import {NativeModules} from 'react-native';

// PROJECT IMPORT
import {clearAllAsyncStorage} from '../commonFunctions';
import {api} from './api';

// THIRD - PARTY IMPORT
import {
  Middleware,
  MiddlewareAPI,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import orderSlice from '../features/order/orderSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  order: orderSlice,
});

export const middleware: Middleware =
  (api: MiddlewareAPI) => next => (action: any) => {
    const payload = action?.payload;

    if (payload?.data?.message === 'Unauthorized') {
      clearAllAsyncStorage();
      NativeModules.DevSettings.reload();
    }
    return next(action);
  };

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(api.middleware)
      .concat(middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
