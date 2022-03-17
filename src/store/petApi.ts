import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsersByUserId: build.query<
      GetUsersByUserIdApiResponse,
      GetUsersByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}` }),
    }),
    patchUsersByUserId: build.mutation<
      PatchUsersByUserIdApiResponse,
      PatchUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    postUser: build.mutation<PostUserApiResponse, PostUserApiArg>({
      query: (queryArg) => ({
        url: `/user`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as petApi };
export type GetUsersByUserIdApiResponse = /** status 200 User Found */ User;
export type GetUsersByUserIdApiArg = {
  /** Id of an existing user. */
  userId: number;
};
export type PatchUsersByUserIdApiResponse = /** status 200 User Updated */ User;
export type PatchUsersByUserIdApiArg = {
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
export type PostUserApiResponse = /** status 200 User Created */ User;
export type PostUserApiArg = {
  /** Post the necessary fields for the API to create a new user. */
  body: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
  };
};
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: string;
  emailVerified: boolean;
  createDate?: string;
};
export const {
  useGetUsersByUserIdQuery,
  usePatchUsersByUserIdMutation,
  usePostUserMutation,
} = injectedRtkApi;
