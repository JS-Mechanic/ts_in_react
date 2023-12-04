type ButtonProps = {
  label: "click" | "Click on Me";
  backgroundColor: "pink" | "gray" | "red";
  pillShape?: boolean;
};

export default function Button({ label, backgroundColor }: ButtonProps) {
  return <button style={{ backgroundColor: backgroundColor }}>{label}</button>;
}
