import Button from "./Button.tsx";

export default function Page() {
  return (
    <main>
      <Button
        label={"Click on Me"}
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
      />
    </main>
  );
}
