import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
            'text-black font-sans py-3 px-4 bg-yellow-500', // need to add the linear bg gradient through tailwind
        )}
        >
            { children }
        </Comp>
    )
}