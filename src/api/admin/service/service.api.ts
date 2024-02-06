import axios from "axios";

export const getServices = async () => {
  return (await axios.get("https://event360-eta.vercel.app/api/v1/services"))
    .data;
};
