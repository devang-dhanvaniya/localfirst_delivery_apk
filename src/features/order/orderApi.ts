// PROJECT IMPORT
import {BaseUrl} from '../../constant';
import {api} from '../../redux/api';

export const orderApi = api.injectEndpoints({
  endpoints: build => ({
    getDashboard: build.query<{data: any[]}, void>({
      query: () => `${BaseUrl.DELIVERY_PERSON}/dashboard-summary`,
    }),
    getOrders: build.mutation<{data: any[]}, any>({
      query: params => ({
        url: `${BaseUrl.DELIVERY_PERSON}/order/get-order-list`,
        body: params,
        method: 'POST',
      }),
    }),
    updateOrderStatus: build.mutation<any, any>({
      query: params => ({
        url: `${BaseUrl.DELIVERY_PERSON}/order/update-order-status`,
        body: params,
        method: 'POST',
      }),
    }),
    getOrderDetails: build.query<any, void>({
      query: params =>
        `${BaseUrl.DELIVERY_PERSON}/order/get-order-details/${params}`,
    }),
    getDeliveryPersonDetails: build.query<any, void>({
      query: () => `${BaseUrl.DELIVERY_PERSON}/get-deliveryPerson-details`,
    }),
    getNotification: build.query<any, void>({
      query: () => `${BaseUrl.DELIVERY_PERSON}/notification-list`,
    }),
  }),
});

export const {
  useGetOrdersMutation,
  useUpdateOrderStatusMutation,
  useGetOrderDetailsQuery,
  useGetDeliveryPersonDetailsQuery,
  useGetDashboardQuery,
  useGetNotificationQuery
} = orderApi;

export const {
  endpoints: {
    getDashboard,
    getOrders,
    updateOrderStatus,
    getOrderDetails,
    getDeliveryPersonDetails,
    getNotification
  },
} = orderApi;
