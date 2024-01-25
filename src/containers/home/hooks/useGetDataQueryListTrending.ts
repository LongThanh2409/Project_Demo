import { callApis } from "@/src/config/api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export const useGetDataQueryListTrending = (data?: any) => {
  const callApi = callApis();
  const fetch = useCallback(async () => {
    const rs = await callApi.get(`/trending/all/${data}`);
    return rs.data;
  }, [callApi]);
  const fn = useQuery({
    queryKey: ["useGetDataQueryListTrending", data],
    queryFn: fetch,
  });
  return {
    ...fn,
  };
};
