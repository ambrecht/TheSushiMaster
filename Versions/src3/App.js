import React, { useState, useEffect } from 'react';
import TableForm from './components/TableForm';
import GroupForm from './components/GroupForm';
import Group from './components/Group';
import DisplayTable from './components/Table';
import { createGroup } from './utils/createGroup';
import { updateGroup } from './utils/updateGroup';

export default function App() {
  //The entire state of the application is located here
  const [Table, setTable] = useState([]);
  const [Groups, setGroups] = useState([]);
  const [SeatCounter, setSeatCounter] = useState(0);
  const [Index, setIndex] = useState(1);
  const [GroupUpdate, setGroupUpdate] = useState([]);

  useEffect(() => {
    console.log(Groups);
  }, [Groups]);

  //Determines the table size
  const saveTable = (MaxLength) => {
    setTable(createGroup(MaxLength));
  };

  //Creates and places the different groups then adds an ID to each group
  const saveGroup = (GroupLength) => {
    const newGroup = createGroup(GroupLength, SeatCounter, Index);
    return SeatCounter >= Table.length
      ? console.log('Volles Haus!')
      : (setSeatCounter(SeatCounter + GroupLength),
        setGroups([...Groups, [...newGroup]]),
        setIndex(() => Index + 1));
  };
  //Updates the groups when the table is full and the first groups leave it.
  const updateGroups = (GroupLength) => {
    const update = updateGroup(GroupUpdate, Groups, GroupLength, Index);
    //setGroups(updateGroup(GroupUpdate, Groups, GroupLength, Index));
  };

  const removeGroup = (GroupID) => {
    const RemoveArr = Groups[GroupID];
    const SeatNumber = Groups[GroupID][0].seat;
    const slice1 = [...Groups.slice(0, GroupID)];
    const slice2 = [...Groups.slice(GroupID + 1)];
    const placHolder = Groups[GroupID].map((e) => ({
      seat: e.seat,
      group: 'empty',
    }));

    const removeGroup = [...slice1, placHolder, ...slice2];
    console.log(removeGroup);
    setSeatCounter(SeatCounter - RemoveArr.length);
    setGroupUpdate([...GroupUpdate, ...Groups[GroupID]]);
    setGroups(removeGroup);
  };

  return (
    <div>
      <TableForm onCreateTable={saveTable}></TableForm>
      <DisplayTable
        table={Table}
        totalSeats={Table.length}
        occupied={SeatCounter}
      ></DisplayTable>
      {Table.length > 0 && (
        <GroupForm
          onUpdateGroup={updateGroups}
          onCreateGroup={saveGroup}
          update={GroupUpdate.length >= 1 ? true : false}
        ></GroupForm>
      )}
      {Groups && (
        <Group ID={Index} group={Groups} onRemove={removeGroup}></Group>
      )}
    </div>
  );
}
