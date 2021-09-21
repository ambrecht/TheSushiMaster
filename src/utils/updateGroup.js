//UPDATE LOGIK
// 1. FristFree + Grouplenght ? return index of Frist free group
// 2. Suche nach dem nächsten freien Index ab ( FristFree + Grouplenght)
// 3. Überprüfe ob von dem NEWINDEX + Grouplenght Plätze in Reihe frei sind.
// 4. Suche nach dem nächsten freien Index ab ( NEWINDEX + NewGrouplenght)

import { createGroup } from './createGroup';
import { maxSeatCalculator } from './maxSeatCalculator';
import { groupPlacement } from './groupPlacement';

export const updateGroup = (OldGroupsArr, NewGroupLenght, GroupIndex) => {
  const arr = OldGroupsArr;
  const MaxFreeSeats = maxSeatCalculator(arr);
  const placemant = groupPlacement(arr, NewGroupLenght, MaxFreeSeats);
  const updateGroup = createGroup(NewGroupLenght, GroupIndex);
  const firstHalf = arr.slice(0, placemant);
  const secondHalf = arr.slice(placemant + NewGroupLenght, arr.lenght);
  const newTable = [...firstHalf, ...updateGroup, ...secondHalf];

  return newTable;
};
