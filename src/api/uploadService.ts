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
      fileUpload: builder.mutation<any, { data: any, file: File }>({
        query: ({ data, file }: any) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('data', JSON.stringify(data));
          return {
            url: '/upload',
            method: 'POST',
            body: formData
          };
        }
      }),
      fileCompress: builder.mutation<any, any>({
        query: (body) => ({
          url: '/upload/compress',
          method: 'PATCH',
          body
        })
      })
    })
});
  
export const { useGetUploadQuery, useFileUploadMutation, useFileCompressMutation } = UploadService;