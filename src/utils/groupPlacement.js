export const groupPlacement = (flat, leng, maxfree) => {
  const newGrouplenght = leng;
  const emptySeats = flat.filter((seat) => seat === 'empty');
  const findEmptyIndex = (index) => {
    return flat.indexOf('empty', index);
  };
  const firstIndex = findEmptyIndex(0);

  const reducer = (accu, cur, index, arr) => {
    if (arr[findEmptyIndex(accu) + newGrouplenght - 1] === 'empty') {
      return accu;
    } else return accu + findEmptyIndex(accu + leng);
  };

  const reducer2 = (accu, cur, index, arr) => {
    if (
      arr[findEmptyIndex(accu) + newGrouplenght - 1] === 'empty' &&
      arr[findEmptyIndex(accu) + newGrouplenght] !== 'empty'
    ) {
      return accu;
    } else return accu + findEmptyIndex(accu + 1);
  };
/* 
  function isFree(e, i, a) {
    if (
      emptySeats.length - maxfree >= newGrouplenght &&
      e === 'empty' &&
      a[i + newGrouplenght - 1] === 'empty'
    ) {
      return true;
    } else if (e === 'empty' && a[i + newGrouplenght - 1] === 'empty') {
      return true;
    } else console.log('Wrong', i);
  } */
  if (emptySeats.length - maxfree >= leng)
    return flat.reduce(reducer2, firstIndex);
  else return flat.reduceRight(reducer, firstIndex);
};
