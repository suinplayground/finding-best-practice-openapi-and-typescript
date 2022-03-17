import { useGetUsersByUserIdQuery } from "@suin/my-api";

export function useCurrentUser() {
  const { data, isFetching, isLoading } = useGetUsersByUserIdQuery({
    userId: Number(localStorage.getItem("userId")!),
  });
  return { user: data, isFetching, isLoading };
}
