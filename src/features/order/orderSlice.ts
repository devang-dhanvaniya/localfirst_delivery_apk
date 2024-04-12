import {useMemo} from 'react';

// PROJECT IMPORT
import {preparePaginateData} from '../../commonFunctions';
import {useAppSelector} from '../../redux/hooks';
import {RootState} from '../../redux/store';
import {orderApi} from './orderApi';

// THIRD - PARTY IMPORT
import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  items: any;
  orderDetails: any;
  deliveryDetails: any;
}

const initialState: InitialState = {
  items: {},
  orderDetails: {},
  deliveryDetails: {},
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
  },
});

export default orderSlice.reducer;
export const {clearOrder, setOrders} = orderSlice.actions;

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
