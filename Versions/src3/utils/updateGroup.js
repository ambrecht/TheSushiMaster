//UPDATE LOGIK
// 1. FristFree + Grouplenght ? return index of Frist free group
// 2. Suche nach dem nächsten freien Index ab ( FristFree + Grouplenght)
// 3. Überprüfe ob von dem NEWINDEX + Grouplenght Plätze in Reihe frei sind.
// 4. Suche nach dem nächsten freien Index ab ( NEWINDEX + NewGrouplenght)

import { createGroup } from './createGroup';
import { canSeat } from './maxSeatCalculator';
//import { groupPlacement } from './groupPlacement';

export const updateGroup = (
  GroupUpdate,
  OldGroupsArr,
  NewGroupLenght,
  GroupIndex,
) => {
  const flat = OldGroupsArr.flatMap((groups) => groups.map((g) => g.group));
  const firstFree = flat.indexOf('empty');
  const emptySeats = flat.filter((place) => place.group === 'empty');
  const MaxFreeSeats = canSeat(OldGroupsArr);

  const updateIndex = firstFree;
  const seatnumber = updateIndex - NewGroupLenght;
  const updateGroup = createGroup(NewGroupLenght, seatnumber, GroupIndex);
  const slice1 = [...OldGroupsArr.slice(0, updateIndex)];
  const slice2 = [...OldGroupsArr.slice(updateIndex + 1)];
  const newGroupsArr = [...slice1, updateGroup, ...slice2].sort();

  console.log('MAX', canSeat(OldGroupsArr));

  //return newGroup;
};
