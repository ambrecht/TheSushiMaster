const longestStreak = (predicater) => (flatArr) => (length) =>
  flatArr.reduce(
    ({ accu, curr }, x) =>
      predicater(x) ? { index: accu } : { accu, curr: 0 },
    { accu: 0, curr: 0 },
  ).max;

export function groupPlacement(table) {
  longestStreak((s) => s === 'empty')(
    table.flatMap((groups) => groups.map((g) => g.group)),
  )(2);
}
