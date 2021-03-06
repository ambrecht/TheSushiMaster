//This masterpiece comes from Scott Sauyet, who used it in response to a question at Stackoverflow.

const longestStreak = (pred) => (xs) =>
  xs.reduce(
    ({ max, curr }, x) =>
      pred(x)
        ? { max: curr >= max ? curr + 1 : max, curr: curr + 1 }
        : { max, curr: 0 },
    { max: 0, curr: 0 },
  ).max;

export function maxSeatCalculator(table) {
  return longestStreak((s) => s === 0 || s === 'empty')(table);
}
