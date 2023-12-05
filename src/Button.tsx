type ButtonProps = {
  label: "click" | "Click on Me";
  style: React.CSSProperties;
  borderRadius: { [edge: string]: number };
};

export default function Button({ label, style, borderRadius }: ButtonProps) {
  const { topLeft, topRight, bottomRight, bottomLeft } = borderRadius;
  return (
    <button
      style={{
        color: style.color,
        backgroundColor: style.backgroundColor,
        padding: style.padding,
        borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
      }}
    >
      {label}
    </button>
  );
}
