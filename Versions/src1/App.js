import React, { useState } from 'react';
import TableForm from './components/TableForm';
import GroupForm from './components/GroupForm';
import Group from './components/Group';
import DisplayTable from './components/Table';
import { createGroup } from './utils/createGroup';
import { updateGroup } from './utils/updateGroup';

export default function App() {
  //The entire state of the application is located here
  const [Table, setTable] = useState();
  const [Groups, setGroups] = useState([]);
  const [SeatCounter, setSeatCounter] = useState(0);
  const [Index, setIndex] = useState(0);
  const [GroupUpdate, setGroupUpdate] = useState([]);

  //Determines the table size
  const saveTable = (MaxLength) => {
    setTable(MaxLength);
  };

  //Creates and places the different groups then adds an ID to each group
  const saveGroup = (GroupLength) => {
    const newGroup = createGroup(SeatCounter, GroupLength, Index);
    return SeatCounter >= Table
      ? console.log('Volles Haus!')
      : (setSeatCounter(SeatCounter + GroupLength),
        setGroups([...Groups, [...newGroup]]),
        setIndex(() => Index + 1));
  };
  //Updates the groups when the table is full and the first groups leave it.
  const updateGroups = (GroupLength) => {
    const freeSeats = GroupUpdate.map((e) => e.seat);
    const newGroup = createGroup(freeSeats[0] - 1, GroupLength, Index);
    console.log('Update', newGroup);
    const update = updateGroup(GroupUpdate, Groups, newGroup);
    return update;
  };

  const removeGroup = (GroupID) => {
    setGroupUpdate([...GroupUpdate, ...Groups[GroupID]]);
    const removeGroup = [
      ...Groups.slice(0, GroupID),
      ...Groups.slice(GroupID + 1),
    ];
    setGroups(removeGroup);
  };

  return (
    <div>
      <TableForm onCreateTable={saveTable}></TableForm>
      <DisplayTable totalSeats={Table} occupied={SeatCounter}></DisplayTable>
      <GroupForm
        onCreateGroup={GroupUpdate[0] ? updateGroups : saveGroup}
      ></GroupForm>
      {Groups && (
        <Group ID={Index} group={Groups} onRemove={removeGroup}></Group>
      )}
    </div>
  );
}
