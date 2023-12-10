import { type Color } from "./lib/types.ts";
import React from "react";

type ButtonProps = React.ComponentProps<"button"> & { color?: Color };

export default function Button({ color }: ButtonProps) {
  return <button style={{ backgroundColor: color }}>Click on me</button>;
}
