// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const participantesApi = createApi({
  reducerPath: 'participantesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://yocreoquesipuedohacerlo.com/' }),
  endpoints: (builder) => ({
    setRegistrarParticipante: builder.mutation({
      query: (variables) => {
        return {
          url: `registrarParticipante`,
          method: 'post',
          body: variables,
          formData: true
        }
      },
    }),
    getParticipantes: builder.query({
      query: (variables) => {
        console.log('variables', variables)
        return {
          url: `listarParticipantes`,
          method: 'post',
          body: variables,
          formData: true
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSetRegistrarParticipanteMutation, useGetParticipantesQuery } = participantesApi;