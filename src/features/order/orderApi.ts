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
  }),
});

export const {useGetOrdersMutation, useUpdateOrderStatusMutation} = orderApi;
export const {
  endpoints: {getOrders, updateOrderStatus},
} = orderApi;
