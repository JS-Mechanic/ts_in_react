import React from "react";

export default function Button() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(`Button clicked ---> ${e.target}`);
  }

  return <button onClick={handleClick}>Click me</button>;
}
