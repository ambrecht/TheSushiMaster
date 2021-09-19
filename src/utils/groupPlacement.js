//UPDATE LOGIK
// 1. FristFree + Grouplenght -1 ? return index of Frist free group
// 2. Suche nach dem nächsten freien Index ab ( FristFree + Grouplenght)
// 3. Überprüfe ob von dem NEWINDEX + Grouplenght Plätze in Reihe frei sind.
// 4. Suche nach dem nächsten freien Index ab ( NEWINDEX + NewGrouplenght)

//if (maxseatsinrow - freeseats >= grouplenght) suche nach dem ersten freien Platz FristFree + Grouplenght -1

export const groupPlacement = (flat, leng, maxfree) => {
  console.log('lenght', leng);
  const newGrouplenght = leng;
  const emptySeats = flat.filter((seat) => seat === 'empty');
  console.log(emptySeats.length - maxfree);
  const findEmptyIndex = (index) => {
    return flat.indexOf('empty', index);
  };
  const firstIndex = findEmptyIndex(0);
  const reducer = (accu, cur, index) => {
    if (flat[findEmptyIndex(accu) + leng - 1] === 'empty') {
      console.log('YOOO1', accu);
      return accu;
    } else return accu + findEmptyIndex(accu + leng);
  };

  const reducer2 = (accu, cur, index) => {
    if (
      flat[findEmptyIndex(accu) + leng - 1] === 'empty' &&
      flat[findEmptyIndex(accu) + leng] !== 'empty'
    ) {
      console.log('reducer2', accu, flat[findEmptyIndex(accu) + leng]);
      return accu;
    } else return accu + findEmptyIndex(accu + 1);
  };

  function isFree(e, i, a) {
    if (
      emptySeats.length - maxfree >= newGrouplenght &&
      e === 'empty' &&
      a[i + newGrouplenght - 1] === 'empty'
    ) {
      console.log('True1', e, i, a[i]);
      return true;
    } else if (e === 'empty' && a[i + newGrouplenght - 1] === 'empty') {
      console.log('True2', e, i, a[i]);
      return true;
    } else console.log('NÖÖÖÖÖÖ', i);
  }
  if (emptySeats.length - maxfree >= leng)
    return flat.reduce(reducer2, firstIndex);
  else return flat.reduce(reducer, firstIndex);
};
