import { DialogContext } from "@/context/DialogContextProvider";
import { useContext } from "react";

export const useDialogState = () => {
  return useContext(DialogContext);
};
