import useDialog from '@/hooks/useDialog';
import { ReactNode, createContext } from 'react';

type ModalContextType = {
    isDialogOpen: boolean;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openDialog: () => void;
    closeDialog: () => void;
};

export const DialogContext = createContext<ModalContextType | undefined>(undefined);

const DialogContextProvider = ({ children }: { children: ReactNode }) => {
    const AllContext = useDialog();
    return (
        <div>
            <DialogContext.Provider value={AllContext}>
                {children}
            </DialogContext.Provider>
        </div>
    );
};

export default DialogContextProvider; 
