import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

export const useGetServices = () => {
  const servicesData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => data.data,
  });
  return servicesData;
};
