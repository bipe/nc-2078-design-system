import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
    type?: 'primary' | 'secondary' | 'tertiary' | 'inverted';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ type = 'primary', children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
            'text-black text-md font-sans tracking-wide',
            {
                'bg-yellow-500 hover:bg-yellow-400 font-bold py-3 px-4 clipped-edge': type === 'primary',
                'bg-yellow-500 hover:bg-yellow-400 font-normal py-3 px-4 clipped-edge': type === 'secondary',
                'text-yellow-500 hover:text-yellow-400 font-semibold': type === 'tertiary',
                'text-yellow-500 bg-gray-800 hover:bg-gray-900 py-3 px-4 clipped-edge': type === 'inverted',

            }
        )}
        >
            { children }
        </Comp>
    )
}