import {BaseUrl} from '../../constant';
import {api} from '../../redux/api';

export const dashboardApi = api.injectEndpoints({
  endpoints: build => ({
    getDashboard: build.query<{data: any[]}, void>({
      query: () => `${BaseUrl.VENDOR}/dashboard-summary`,
    }),
  }),
});

export const {useGetDashboardQuery} = dashboardApi;
export const {
  endpoints: {getDashboard},
} = dashboardApi;
