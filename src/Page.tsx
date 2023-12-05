import Button from "./Button.tsx";

export default function Page() {
  return (
    <main>
      <Button
        label="Click on Me"
        backgroundColor="pink"
        padding={["5px", "20px", "40px", "60px"]}
      />
    </main>
  );
}
