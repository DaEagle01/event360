import useDialog from '@/hooks/useDialog';
import { ModalContextType } from '@/types/ModalContextType';
import { ReactNode, createContext } from 'react';

export const DialogContext = createContext<ModalContextType | null>(null);

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
