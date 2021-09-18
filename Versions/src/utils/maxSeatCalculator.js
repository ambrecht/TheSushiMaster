// Calculates the maximum available seats in a row

const longestStreak = (predicater) => (flatArr) =>
  flatArr.reduce(
    ({ max, curr }, x) =>
      predicater(x)
        ? { max: curr >= max ? curr + 1 : max, curr: curr + 1 }
        : { max, curr: 0 },
    { max: 0, curr: 0 },
  ).max;

export function maxSeatCalculator(table) {
  longestStreak((s) => s == 0 || s == 'empty')(
    table.flatMap((groups) => groups.map((g) => g.group)),
  );
}
