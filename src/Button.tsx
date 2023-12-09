type User = { name: string; sessionId: number };

type Guest = Omit<User, "name">;

export default function Button() {
  return <button>Click on me</button>;
}
