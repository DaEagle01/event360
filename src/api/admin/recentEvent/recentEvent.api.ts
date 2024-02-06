import axios from "axios";

export const getRecentEvents = async () => {
  return (
    await axios.get("https://event360-eta.vercel.app/api/v1/recentEvents")
  ).data;
};
