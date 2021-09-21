import { createGroup } from './createGroup';

export const updateTable = (
  OldTable,
  NewGroupLenght,
  Seatnumber,
  GroupIndex,
) => {
  const expand = OldTable.map((groups) => groups.map((g) => [g])).flat();
  const newGroup = createGroup(NewGroupLenght, Seatnumber, GroupIndex);
  const cutOldTable1 = expand.slice(-expand.length + NewGroupLenght);
  const slice1 = [...expand.slice(NewGroupLenght)];
  const slice2 = [...expand.slice(GroupIndex + 1)];
  const newTable = [...slice1, newGroup, ...slice2];

  console.log(expand);

  return newTable;
};
