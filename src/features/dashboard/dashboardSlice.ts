// THIRD - PARTY IMPORT
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../redux/store';
import {useAppSelector} from '../../redux/hooks';
import {useMemo} from 'react';
import { productApi } from '../product/productApi';
import { dashboardApi } from './dashboardApi';

interface InitialState {
  DashboardSummary: any;
}

const initialState: InitialState = {
  DashboardSummary: {},
};

const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      dashboardApi.endpoints.getDashboard.matchFulfilled,
      (state, { payload }) => {
        state.DashboardSummary =
          payload?.data || initialState.DashboardSummary;
      },
    );
  },
});

export default dashboardSlice.reducer;

export const selectDashboardSummary = (state: RootState) =>
  state.dashboard.DashboardSummary;
export const useDashboardSummary = () => {
  const DashboardSummary = useAppSelector(selectDashboardSummary);
  return useMemo(() => DashboardSummary, [DashboardSummary]);
};
