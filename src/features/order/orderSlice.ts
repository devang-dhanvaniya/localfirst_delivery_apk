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
}

const initialState: InitialState = {
  items: {},
  orderDetails: {},
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
