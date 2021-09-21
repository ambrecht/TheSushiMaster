const comparsion = (a, b) => a === b;

export function createNestedArray(list) {
  let res = [];
  let idx = 0;
  let len = list.length;
  while (idx < len) {
    let nextidx = idx + 1;
    while (nextidx < len && comparsion(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
}
