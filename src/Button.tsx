const buttonTextOptions = [
  "Click me",
  "Click me again",
  "Click me one more time",
] as const;

export default function Button() {
  return (
    <>
      {buttonTextOptions.map((option) => {
        return (
          <button key={option} style={{ display: "block" }}>
            {option}
          </button>
        );
      })}
    </>
  );
}
