type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};
export default function Button<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  return (
    <>
      <button>Click on me</button>
      <p>{countValue.toString()}</p>
      <p>
        {countHistory.reduce((acc, item) => {
          return acc + item.toString();
        }, "")}
      </p>
    </>
  );
}
