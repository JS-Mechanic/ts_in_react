import Button from "./Button.tsx";

export default function Page() {
  return (
    <main>
      <Button countValue={5} countHistory={[1, 2, 3]} />
    </main>
  );
}
