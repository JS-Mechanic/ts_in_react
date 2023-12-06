import Button from "./Button.tsx";

export default function Page() {
  return (
    <main>
      <Button
        variant="secondary"
        autoFocus={true}
        type={"submit"}
        style={{ backgroundColor: "pink", borderRadius: "5px 15px 25px 35px" }}
      >
        Click Here
      </Button>
    </main>
  );
}
