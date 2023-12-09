import { useRef } from "react";

export default function Button() {
  const ref = useRef<HTMLButtonElement>(null);
  console.log(ref);
  return <button ref={ref}>Click me</button>;
}
