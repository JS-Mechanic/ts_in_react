import Button from "./Button.tsx";
import { useEffect, useState } from "react";

type User = { name: string; age: number };

export default function Page() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({ name: "Milad", age: 28 });
  }, []);

  return (
    <main>
      <Button />
      <p>User's name: {user?.name}</p>
      <p>User's age: {user?.age}</p>
    </main>
  );
}
