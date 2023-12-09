import { useEffect } from "react";

type ButtonColor = "red" | "green" | "blue";

export default function Button() {
  useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColor",
    ) as ButtonColor;
    console.log(previousButtonColor);
  }, []);

  return <button>Click on me </button>;
}
