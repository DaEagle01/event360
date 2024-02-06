import { DialogContext } from "@/context/DialogContextProvider";
import { useContext } from "react";

export const useDialogState = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "useDialogState must be used within a DialogContextProvider"
    );
  }
  return context;
};
