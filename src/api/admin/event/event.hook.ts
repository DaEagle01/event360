import { useQuery } from "@tanstack/react-query";
import { getEvents } from "./event.api";

export const useGetEvents = () => {
  const servicesData = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
    select: (data) => data.data,
  });
  return servicesData;
};
