/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useDialogState } from "@/hooks/useDialogState"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent } from "react";

const ConfirmDelete = () => {
    let onCloseDeleteDialog: any;
    let openDeleteDialog: any;
    let deleteUrl: any;
    const dialogState = useDialogState();
    if (dialogState) {
        ({ onCloseDeleteDialog, openDeleteDialog, deleteUrl } = dialogState);
    }
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation({
        mutationFn: (endPoint) => {
            return axios.delete(`https://event360-eta.vercel.app/api/v1/${endPoint}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [deleteUrl.split('/')[0]] })
        }
    })

    const handleDelete = async (e: FormEvent) => {
        e.preventDefault();
        await mutateAsync(deleteUrl);
        onCloseDeleteDialog();
    }

    return (
        <AlertDialog open={openDeleteDialog} onOpenChange={onCloseDeleteDialog}>
            <AlertDialogContent className="w-[90%]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the item from our server.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfirmDelete