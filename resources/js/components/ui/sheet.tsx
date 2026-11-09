import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetTitle = SheetPrimitive.Title;

interface SheetContentProps extends React.ComponentProps<typeof SheetPrimitive.Content> {
    closeLabel: string;
    /** Hide the built-in close button when the content supplies its own. */
    showClose?: boolean;
}

/** Always drops down from the top edge, in both LTR and RTL. */
function SheetContent({ className, children, closeLabel, showClose = true, ...props }: SheetContentProps) {
    return (
        <SheetPrimitive.Portal>
            <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
            <SheetPrimitive.Content
                className={cn(
                    'fixed inset-x-0 top-0 z-50 flex h-full w-full flex-col bg-white shadow-xl data-[state=closed]:animate-sheet-out data-[state=open]:animate-sheet-in',
                    className,
                )}
                {...props}
            >
                {children}
                {showClose && (
                    <SheetPrimitive.Close className="absolute right-4 top-4 rounded-lg p-2 text-stone-700 hover:bg-plum-900/5">
                        <X className="size-5" aria-hidden="true" />
                        <span className="sr-only">{closeLabel}</span>
                    </SheetPrimitive.Close>
                )}
            </SheetPrimitive.Content>
        </SheetPrimitive.Portal>
    );
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle };
