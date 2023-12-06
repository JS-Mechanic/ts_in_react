import Button from "./Button.tsx";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const buttonTitle = <p>Click On Me</p>;

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <main>
      <Button
        style={{
          color: "green",
          backgroundColor: "pink",
          padding: "5px 20px 40px 60px",
        }}
        borderRadius={{
          topLeft: 5,
          topRight: 10,
          bottomRight: 15,
          bottomLeft: 20,
        }}
        onClick={handleClick}
      >
        <>
          {buttonTitle}
          {count}
        </>
      </Button>
    </main>
  );
}
