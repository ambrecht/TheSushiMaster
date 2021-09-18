import { v4 } from 'uuid';

export function createGroup(SeatID, ArrLength, GroupID) {
  const Table = Array.from(
    { length: ArrLength },
    (v, i) => (v = { id: v4(), seat: SeatID + i + 1, group: GroupID }),
  );
  return Table;
}
