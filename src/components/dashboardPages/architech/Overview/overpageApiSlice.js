import { apiSlice } from "../../../../ApiSliceComponent/jaiMaxApi";

export const clientApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: "/Architech/userDetails",
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetUserDetailsQuery,
} = clientApiSlice;