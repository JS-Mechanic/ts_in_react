import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant,
  autoFocus,
  type,
  ...rest
}: ButtonProps) {
  return (
    <button autoFocus={autoFocus} type={type} {...rest}>
      <>
        {children}
        <div>{variant}</div>
      </>
    </button>
  );
}
