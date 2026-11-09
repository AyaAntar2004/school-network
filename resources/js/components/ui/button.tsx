import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'btn-shine inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-brand-600 text-white hover:-translate-y-0.5 hover:bg-brand-500 active:translate-y-0',
                outline: 'border border-plum-900/25 bg-white/60 text-plum-950 hover:-translate-y-0.5 hover:bg-white',
                outlineLight: 'border border-white/25 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/15',
                inverse: 'bg-white text-plum-900 hover:-translate-y-0.5 hover:bg-brand-50',
            },
            size: {
                default: 'h-11 px-6',
                lg: 'h-14 px-9 text-base',
                icon: 'size-12',
            },
        },
        defaultVariants: { variant: 'default', size: 'default' },
    },
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button };
