import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "dark";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-zap text-ink",
  secondary: "bg-paper text-ink",
  dark: "bg-ink text-paper",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...rest
}: ButtonProps) {
  const sizeClasses = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";

  return (
    <button
      {...rest}
      className={`
        inline-flex items-center justify-center gap-2 rounded-full
        border-[2.5px] border-ink font-mono font-bold uppercase tracking-tight
        shadow-brut-sm transition-all duration-100 ease-out
        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brut
        active:translate-x-0.5 active:translate-y-0.5 active:shadow-brut-press
        ${variantClasses[variant]} ${sizeClasses} ${className}
      `}
    >
      {children}
      {icon}
    </button>
  );
}
