type ButtonProps = {
  label: "click" | "Click on Me";
  backgroundColor: "pink" | "gray" | "red";
  padding: [string, string, string, string];
};

export default function Button({
  label,
  backgroundColor,
  padding,
}: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        padding: `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`,
      }}
    >
      {label}
    </button>
  );
}
