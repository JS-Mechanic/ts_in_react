type ButtonProps = {
  label: "click" | "Click on Me";
  style: {
    backgroundColor: "pink" | "gray" | "red";
    padding: [string, string, string, string];
  };
};

export default function Button({ style }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: style.backgroundColor,
        padding: `${style.padding[0]} ${style.padding[1]} ${style.padding[2]} ${style.padding[3]}`,
      }}
    >
      Click on Me
    </button>
  );
}
