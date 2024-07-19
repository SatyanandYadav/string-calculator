export const add = (numbers) => {
  if (!numbers) return 0;

  let [delimiter, allNumbers] = numbers.split("\n");
  delimiter = delimiter.replace("//", "");

  const sum = (!parseInt(delimiter) ? allNumbers : numbers)
    .split(!parseInt(delimiter) ? delimiter : /,|\n/)
    .reduce((sum, number) => sum + Number(number), 0);

  return sum;
};
