const getCustomDelimiterRegex = (delimiterString) => {
  const delimiter = delimiterString
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

  return new RegExp(delimiter);
};

const sumOfAllNumbers = (numberString, delimiter) => {
  return numberString.split(delimiter).reduce((sum, number) => {
    if (Number(number) <= 1000) sum += Number(number);
    return sum;
  }, 0);
};

const getNegativeNumbers = (numberString, delimiter) => {
  return numberString.split(delimiter).reduce((negativeNumbers, number) => {
    if (Number(number) < 0) negativeNumbers.push(number);
    return negativeNumbers;
  }, []);
};

export const add = (numbers) => {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let allNumbers = numbers;

  if (numbers.includes("//")) {
    delimiter = getCustomDelimiterRegex(numbers.split("\n")[0]);
    allNumbers = numbers.split("\n")[1];
  }

  const sum = sumOfAllNumbers(allNumbers, delimiter);
  const negativeNumbers = getNegativeNumbers(allNumbers, delimiter);

  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}.`
    );
  }

  return sum;
};
