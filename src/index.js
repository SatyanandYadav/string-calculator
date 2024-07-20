export const add = (numbers) => {
  if (!numbers) return 0;

  const negativeNumbers = [];

  let [delimiter, allNumbers] = numbers.split("\n");
  delimiter = delimiter
    .split("][")
    .map(
      (separator) =>
        "\\" +
        separator
          .replace(/\/|\[|\]/g, "")
          .split("")
          .join("\\")
    )
    .join("|");

  const sum = (numbers.includes("//") ? allNumbers : numbers)
    .split(numbers.includes("//") ? new RegExp(delimiter) : /,|\n/)
    .reduce((sum, number) => {
      if (Number(number) < 0) negativeNumbers.push(number);
      else if (Number(number) <= 1000) sum += Number(number);
      return sum;
    }, 0);

  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}.`
    );
  }

  return sum;
};
