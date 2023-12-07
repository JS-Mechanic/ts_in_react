import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

type SuperButtonProps = ButtonProps & { size: "small" | "medium" | "large" };

export default function Button({
  children,
  variant,
  autoFocus,
  type,
  ...rest
}: SuperButtonProps) {
  return (
    <button autoFocus={autoFocus} type={type} {...rest}>
      <>
        {children}
        <div>{variant}</div>
      </>
    </button>
  );
}
