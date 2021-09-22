export function createGroup(ArrLength, GroupID = 'empty') {
  const Table = Array.from({ length: ArrLength }, (v, i) => (v = GroupID));

  Object.defineProperty(Table, 'length', { writable: false });
  return Table;
}
