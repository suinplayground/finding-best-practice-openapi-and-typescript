import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsersByUserId: build.query({
            query: (queryArg) => ({ url: `/users/${queryArg.userId}` }),
        }),
        patchUsersByUserId: build.mutation({
            query: (queryArg) => ({
                url: `/users/${queryArg.userId}`,
                method: "PATCH",
                body: queryArg.body,
            }),
        }),
        postUser: build.mutation({
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
export const { useGetUsersByUserIdQuery, usePatchUsersByUserIdMutation, usePostUserMutation, } = injectedRtkApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0QXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGV0QXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLElBQUksR0FBRyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDekMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBRzNCO1lBQ0EsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7U0FDNUQsQ0FBQztRQUNGLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxRQUFRLENBR2hDO1lBQ0EsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixHQUFHLEVBQUUsVUFBVSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxNQUFNLEVBQUUsT0FBTztnQkFDZixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7YUFDcEIsQ0FBQztTQUNILENBQUM7UUFDRixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBc0M7WUFDNUQsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixHQUFHLEVBQUUsT0FBTztnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7YUFDcEIsQ0FBQztTQUNILENBQUM7S0FDSCxDQUFDO0lBQ0YsZ0JBQWdCLEVBQUUsS0FBSztDQUN4QixDQUFDLENBQUM7QUFDSCxPQUFPLEVBQUUsY0FBYyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBcUNwQyxNQUFNLENBQUMsTUFBTSxFQUNYLHdCQUF3QixFQUN4Qiw2QkFBNkIsRUFDN0IsbUJBQW1CLEdBQ3BCLEdBQUcsY0FBYyxDQUFDIn0=