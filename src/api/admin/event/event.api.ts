import axios from "axios";

export const getEvents = async () => {
  return (await axios.get("https://event360-eta.vercel.app/api/v1/events"))
    .data;
};
