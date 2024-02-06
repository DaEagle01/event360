import { useQuery } from "@tanstack/react-query";
import { getRecentEvents } from "./recentEvent.api";

export const useGetRecentEvents = () => {
  const servicesData = useQuery({
    queryKey: ["recentEvents"],
    queryFn: getRecentEvents,
    select: (data) => data.data,
  });
  return servicesData;
};
