// const convertToArray = <T,>(value: T): T[] => {
//   return [value];
// };

function convertToArray<T>(val: T): T[] {
  return [val];
}

console.log(convertToArray(5));
console.log(convertToArray("React"));

export default function Button() {
  return <button>Click on me </button>;
}
