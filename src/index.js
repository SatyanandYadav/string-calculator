export const add = (numbers) => {
  if (!numbers) return 0;

  const negativeNumbers = [];

  let [delimiter, allNumbers] = numbers.split("\n");
  delimiter = delimiter.replace("//", "");

  const sum = (!parseInt(delimiter) ? allNumbers : numbers)
    .split(!parseInt(delimiter) ? delimiter : /,|\n/)
    .reduce((sum, number) => {
      if (Number(number) < 0) negativeNumbers.push(number);
      return sum + Number(number);
    }, 0);

  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}.`
    );
  }

  return sum;
};
