// PROJECT IMPORT
import {BaseUrl} from '../../constant';
import {api} from '../../redux/api';

export const orderApi = api.injectEndpoints({
  endpoints: build => ({
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
    getOrderDetails: build.query<any, any>({
      query: params =>
        `${BaseUrl.DELIVERY_PERSON}/order/get-order-details/${params}`,
    }),
  }),
});

export const {
  useGetOrdersMutation,
  useUpdateOrderStatusMutation,
  useGetOrderDetailsQuery,
} = orderApi;

export const {
  endpoints: {getOrders, updateOrderStatus, getOrderDetails},
} = orderApi;
