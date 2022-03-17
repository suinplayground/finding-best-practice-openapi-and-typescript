declare const injectedRtkApi: import("@reduxjs/toolkit/dist/query").Api<import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, {
    getUsersByUserId: import("@reduxjs/toolkit/dist/query").QueryDefinition<GetUsersByUserIdApiArg, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, User, "api">;
    patchUsersByUserId: import("@reduxjs/toolkit/dist/query").MutationDefinition<PatchUsersByUserIdApiArg, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, User, "api">;
    postUser: import("@reduxjs/toolkit/dist/query").MutationDefinition<PostUserApiArg, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, User, "api">;
}, "api", never, typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export { injectedRtkApi as petApi };
export declare type GetUsersByUserIdApiResponse = User;
export declare type GetUsersByUserIdApiArg = {
    /** Id of an existing user. */
    userId: number;
};
export declare type PatchUsersByUserIdApiResponse = User;
export declare type PatchUsersByUserIdApiArg = {
    /** Id of an existing user. */
    userId: number;
    /** Patch user properties to update. */
    body: {
        firstName?: string;
        lastName?: string;
        email?: string;
        dateOfBirth?: string;
    };
};
export declare type PostUserApiResponse = User;
export declare type PostUserApiArg = {
    /** Post the necessary fields for the API to create a new user. */
    body: {
        firstName: string;
        lastName: string;
        email: string;
        dateOfBirth: string;
    };
};
export declare type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth?: string;
    emailVerified: boolean;
    createDate?: string;
};
export declare const useGetUsersByUserIdQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/dist/query").QueryDefinition<GetUsersByUserIdApiArg, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, User, "api">>, usePatchUsersByUserIdMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/dist/query").MutationDefinition<PatchUsersByUserIdApiArg, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, User, "api">>, usePostUserMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/dist/query").MutationDefinition<PostUserApiArg, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, User, "api">>;
//# sourceMappingURL=petApi.d.ts.map