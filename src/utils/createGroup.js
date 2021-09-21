export function createGroup(ArrLength, GroupID = 'empty') {
  const Table = Array.from({ length: ArrLength }, (v, i) => (v = GroupID));
  return Table;
}
