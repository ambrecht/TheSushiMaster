export const createArray = (length) => {
  const value = Number(length);
  const arr = Array.from(Array(value));
  return arr;
};
