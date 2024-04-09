// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAsyncStorage } from '../commonFunctions';
import { BaseUrl, Storage } from '../constant';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl.BASE_URL,
    prepareHeaders: async (headers, { endpoint, getState }) => {
      const user: any = await getAsyncStorage(Storage.USER);
      headers.set('Authorization', `Bearer ${user?.access_token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['User', 'SMSLog'],
});
