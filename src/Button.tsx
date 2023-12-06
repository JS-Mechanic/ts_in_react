import React, { JSX, MouseEventHandler } from "react";

type ButtonProps = {
  children: JSX.Element;
  style: React.CSSProperties;
  borderRadius: { [edge: string]: number };
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  style,
  borderRadius,
  onClick,
}: ButtonProps) {
  const { topLeft, topRight, bottomRight, bottomLeft } = borderRadius;
  return (
    <button
      style={{
        color: style.color,
        backgroundColor: style.backgroundColor,
        padding: style.padding,
        borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
