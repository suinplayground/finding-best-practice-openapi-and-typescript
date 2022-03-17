import { useGetUsersByUserIdQuery } from "./store/petApi.js";
export function useCurrentUser() {
    const { data, isFetching, isLoading } = useGetUsersByUserIdQuery({
        userId: Number(localStorage.getItem("userId")),
    });
    return { user: data, isFetching, isLoading };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ3VycmVudFVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VDdXJyZW50VXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3RCxNQUFNLFVBQVUsY0FBYztJQUM1QixNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyx3QkFBd0IsQ0FBQztRQUMvRCxNQUFNLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLENBQUM7S0FDaEQsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQy9DLENBQUMifQ==