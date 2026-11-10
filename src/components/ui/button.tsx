import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        // Estilo 3D tátil do Sinaliza (Neo-Brutalism suave)
        "3d-primary":
          "bg-indigo-600 text-white border-b-4 border-indigo-800 hover:bg-indigo-700 active:border-b-0 active:translate-y-1 shadow-sm",
        "3d-success":
          "bg-emerald-500 text-white border-b-4 border-emerald-700 hover:bg-emerald-600 active:border-b-0 active:translate-y-1 shadow-sm",
        "3d-accent":
          "bg-amber-500 text-white border-b-4 border-amber-700 hover:bg-amber-600 active:border-b-0 active:translate-y-1 shadow-sm",
        "3d-danger":
          "bg-rose-500 text-white border-b-4 border-rose-700 hover:bg-rose-600 active:border-b-0 active:translate-y-1 shadow-sm",
        "3d-neutral":
          "bg-white text-slate-700 border-2 border-slate-200 border-b-4 hover:bg-slate-50 hover:border-slate-300 active:border-b-2 active:translate-y-1",
        default:
          "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-[0.98]",
        outline:
          "border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700",
        ghost:
          "hover:bg-slate-100 text-slate-700 hover:text-slate-900",
        link:
          "text-indigo-600 underline-offset-4 hover:underline font-semibold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm rounded-xl",
        lg: "h-14 px-8 py-4 text-lg rounded-2xl",
        icon: "h-12 w-12 rounded-2xl p-0",
      },
    },
    defaultVariants: {
      variant: "3d-primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
