import {useMemo} from 'react';

// PROJECT IMPORT
import {preparePaginateData} from '../../commonFunctions';
import {useAppSelector} from '../../redux/hooks';
import {RootState} from '../../redux/store';
import {orderApi} from './orderApi';

// THIRD - PARTY IMPORT
import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  dashboardItems: any;
  items: any;
  orderDetails: any;
  deliveryDetails: any;
  notifictionList: any;
}

const initialState: InitialState = {
  dashboardItems: {},
  items: {},
  orderDetails: {},
  deliveryDetails: {},
  notifictionList: {},
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    clearOrder: () => initialState,
    setOrders: (state, {payload}) => {
      state.items = {
        ...state.items,
        ...payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      orderApi.endpoints.getOrders.matchFulfilled,
      (state, action) => {
        // state.items = payload?.data || initialState.items;
        // console.log(payload?.data,"payload?.datapayload?.data");

        const status = action?.meta?.arg?.originalArgs?.status;
        state.items = {
          ...state.items,
          ...preparePaginateData(
            action,
            state.items || {},
            initialState.items,
            status,
          ),
        };
      },
    );
    builder.addMatcher(
      orderApi.endpoints.getDashboard.matchFulfilled,
      (state, {payload}: any) => {
        console.log(payload?.data, 'payload?.datapayload?.datapayload?.data');

        state.dashboardItems = payload?.data || initialState.dashboardItems;
      },
    );
    builder.addMatcher(
      orderApi.endpoints.getOrderDetails.matchFulfilled,
      (state, {payload}: any) => {
        state.orderDetails = payload?.data || initialState.orderDetails;
      },
    );
    builder.addMatcher(
      orderApi.endpoints.getDeliveryPersonDetails.matchFulfilled,
      (state, {payload}: any) => {
        state.deliveryDetails = payload?.data || initialState.deliveryDetails;
      },
    );
    builder.addMatcher(
      orderApi.endpoints.getNotification.matchFulfilled,
      (state, {payload}: any) => {
        state.notifictionList = payload?.data || initialState.notifictionList;
      },
    );
  },
});

export default orderSlice.reducer;
export const {clearOrder, setOrders} = orderSlice.actions;

export const selectDashboardItems = (state: RootState) =>
  state.order.dashboardItems;
export const useDashboardItems = () => {
  const items = useAppSelector(selectDashboardItems);
  return useMemo(() => items, [items]);
};

export const selectOrderItems = (state: RootState) => state.order.items;
export const useOrderItems = () => {
  const items = useAppSelector(selectOrderItems);
  return useMemo(() => items, [items]);
};

export const selectGetOrderDetails = (state: RootState) =>
  state.order.orderDetails;
export const useGetOrderDetails = () => {
  const orderDetails = useAppSelector(selectGetOrderDetails);
  return useMemo(() => orderDetails, [orderDetails]);
};

export const selectGetDeliveryDetails = (state: RootState) =>
  state.order.deliveryDetails;
export const useGetDeliveryDetails = () => {
  const deliveryDetails = useAppSelector(selectGetDeliveryDetails);
  return useMemo(() => deliveryDetails, [deliveryDetails]);
};

export const selectNotifictionList = (state: RootState) =>
  state.order.notifictionList;
export const useNotifictionList = () => {
  const notifictionList = useAppSelector(selectNotifictionList);
  return useMemo(() => notifictionList, [notifictionList]);
};
