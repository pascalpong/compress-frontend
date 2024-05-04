/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithoutToken } from './baseQuery';

export const UploadService = createApi({
    reducerPath: 'UploadService',
    baseQuery: baseQueryWithoutToken,
    endpoints: (builder) => ({
      getUpload: builder.query<any, any>({
        query: ({}) => ({
          url: '/upload',
          method: 'GET'
        })
      }),
      fileUpload: builder.mutation<any, any>({
        query: (file: File) => {
          const formData = new FormData();
          formData.append('file', file);
          return {
            url: '/upload',
            method: 'POST',
            body: formData
          };
        }, 
      })
    })
});
  
export const { useGetUploadQuery, useFileUploadMutation } = UploadService;