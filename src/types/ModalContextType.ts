import { TEventDataInput, TEvent } from "./Event";
import { TRecentEvent } from "./RecentEvents";
import { TService } from "./Service";

export type ModalContextType = {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openDialog: () => void;
  closeDialog: () => void;
  defaultState: Partial<
    TService | TEvent | TEventDataInput | TRecentEvent | object
  >;
  setDefaultState: React.Dispatch<React.SetStateAction<object>>;
  onOpenDeleteDialog: (url: string) => void;
  onCloseDeleteDialog: () => void;
  openDeleteDialog: boolean;
  setOpenDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUrl: string;
  setDeleteUrl: React.Dispatch<React.SetStateAction<string>>;
};
