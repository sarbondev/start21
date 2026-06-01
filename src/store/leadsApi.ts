import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface LeadPayload {
  name: string;
  phone: string;
  course: string;
  branch: string;
}

export interface LeadResponse {
  ok: boolean;
  message: string;
  id: string;
}

export const leadsApi = createApi({
  reducerPath: "leadsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    submitLead: builder.mutation<LeadResponse, LeadPayload>({
      query: (body) => ({
        url: "lead",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSubmitLeadMutation } = leadsApi;
