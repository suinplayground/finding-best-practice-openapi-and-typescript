import { usePatchUsersByUserIdMutation } from "./store/petApi.js";

export function useUpdateFirstName(firstName: string) {
  const [patchUser, { data, error, isLoading }] =
    usePatchUsersByUserIdMutation();

  const createUser = async () => {
    await patchUser({ userId: 1, body: { firstName } });
  };

  return { createUser, data, isLoading, error };
}
