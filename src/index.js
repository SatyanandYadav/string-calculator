export const add = (numbers) => {
  if (!numbers) return 0;
  const sum = numbers
    .split(",")
    .reduce((sum, number) => sum + Number(number), 0);
  return sum;
};
