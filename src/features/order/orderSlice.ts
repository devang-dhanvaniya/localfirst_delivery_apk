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
}

const initialState: InitialState = {
  items: {},
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
  },
});

export default orderSlice.reducer;
export const {clearOrder, setOrders} = orderSlice.actions;

export const selectOrderItems = (state: RootState) => state.order.items;
export const useOrderItems = () => {
  const items = useAppSelector(selectOrderItems);
  return useMemo(() => items, [items]);
};
