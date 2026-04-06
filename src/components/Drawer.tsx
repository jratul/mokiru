import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@utils/cn";

interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "left" | "right";
  title?: string;
  children?: ReactNode;
}

export function Drawer({ open: openProp, onOpenChange, side = "left", title, children }: DrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : internalOpen;

  const handleOpenChange = (value: boolean) => {
    if (!isControlled) setInternalOpen(value);
    onOpenChange?.(value);
  };

  const isLeft = side === "left";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild aria-describedby={undefined}>
              <motion.div
                className={cn(
                  "fixed top-0 bottom-0 z-50 w-72 flex flex-col",
                  "bg-[var(--color-background)] shadow-[var(--shadow-overlay)]",
                  isLeft ? "left-0 rounded-r-2xl" : "right-0 rounded-l-2xl",
                )}
                initial={{ x: isLeft ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: isLeft ? "-100%" : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center justify-between px-5 pt-5 pb-4 shrink-0">
                  {title && (
                    <DialogPrimitive.Title className="text-lg font-bold text-[var(--color-foreground)]">
                      {title}
                    </DialogPrimitive.Title>
                  )}
                  <DialogPrimitive.Close
                    className={cn(
                      "ml-auto rounded-full p-1.5",
                      "text-[var(--color-muted-foreground)]",
                      "hover:bg-[var(--color-muted)] hover:text-[var(--color-foreground)]",
                      "transition-colors",
                    )}
                    aria-label="닫기"
                  >
                    <X size={20} />
                  </DialogPrimitive.Close>
                </div>
                <div className="flex-1 overflow-y-auto px-2 pb-8">
                  {children}
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
