import React from "react";

type ButtonProps = {
  label: "click" | "Click on Me";
  style: React.CSSProperties;
  borderRadius: { [edge: string]: number };
  onClick: () => void;
};

export default function Button({
  label,
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
      {label}
    </button>
  );
}
