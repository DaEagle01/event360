import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type TContainerProps = {
    children: ReactNode;
    className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
    return (
        <div className={cn('w-full max-w-[90rem] px-4 lg:px-20 mx-auto', className)}>
            {children}
        </div>
    );
};

export default Container;
