import { ModalContextType } from "@/types/ModalContextType";
import { useState } from "react";

const useDialog = (): ModalContextType => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [defaultState, setDefaultState] = useState({});
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteUrl, setDeleteUrl] = useState("");

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    if (defaultState) setDefaultState({});
  };

  const onOpenDeleteDialog = (url: string) => {
    setOpenDeleteDialog(!openDeleteDialog);
    setDeleteUrl(url);
  };

  const onCloseDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
    setDeleteUrl("");
  };

  return {
    isDialogOpen,
    setIsDialogOpen,
    openDialog,
    closeDialog,
    defaultState,
    setDefaultState,
    onOpenDeleteDialog,
    onCloseDeleteDialog,
    openDeleteDialog,
    setOpenDeleteDialog,
    deleteUrl,
    setDeleteUrl,
  };
};

export default useDialog;
