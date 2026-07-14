import { apiSlice } from "../ApiSliceComponent/jaiMaxApi";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: "/Auth/register",
                method: "POST",
                body: { ...credentials }
            }),
        }),
        verify: builder.mutation({
            query: (data) => ({
                url: "/Auth/isVerify",
                method: "POST",
                body: { ...data }
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/Auth/login",
                method: "POST",
                body: credentials
            }),
        }),
        forgot: builder.mutation({
            query: (credentials) => ({
                url: "/Auth/forgotPassword",
                method: "POST",
                body: credentials
            })
        }),
        verifyOtp: builder.mutation({
            query: (credentials) => ({
                url: "/Auth/resetPassword",
                method: "POST",
                body: credentials
            })
        }),
        changePwd: builder.mutation({
            query: (credentials) => ({
                url: "/Auth/changePassword",
                method: "POST",
                body: credentials
            })
        }),
        changePwdReq: builder.mutation({
            query: (credentials) => ({
                url: "/Auth/changePasswordReq",
                method: "POST",
                body: credentials
            })
        }),
        verifyRecaptcha: builder.mutation({
            query: (token) => ({
                url: '/Auth/reCAPTCHAVerify',
                method: 'POST',
                body: token,
            })
        }),
        OTPresent: builder.mutation({
            query: (data) => ({
                url: '/Auth/resendOtp',
                method: 'POST',
                body: data,
            })
        }),

        // NEW: live username-availability check (GET /Auth/CheckUserName?username=...)
        // Declared as a query (not a mutation) so we can use the "lazy" hook and
        // trigger it manually from a debounce timer instead of on every render.
        checkUsername: builder.query({
            query: (username) => ({
                url: "/Auth/CheckUserName",
                method: "GET",
                params: { username },
            }),
        }),

    }),
});

export const {
    useRegisterMutation,
    useVerifyMutation,
    useLoginMutation,
    useForgotMutation,
    useVerifyOtpMutation,
    useChangePwdMutation,
    useVerifyRecaptchaMutation,
    useChangePwdReqMutation,
    useOTPresentMutation,
    useLazyCheckUsernameQuery, // NEW

} = authApiSlice;