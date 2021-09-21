import React, { useState, useEffect } from 'react';
import TableForm from './components/TableForm';
import GroupForm from './components/GroupForm';
import Group from './components/Group';
import { createGroup } from './utils/createGroup';
import { updateGroup } from './utils/updateGroup';
import { updateTable } from './utils/updateTable';
import './styles.css';

export default function App() {
  //The entire state of the application is located here
  const [Table, setTable] = useState([]);
  const [Groups, setGroups] = useState([]);
  const [SeatCounter, setSeatCounter] = useState(0);
  const [Index, setIndex] = useState(0);
  const [GroupUpdate, setGroupUpdate] = useState([]);

  useEffect(() => {
    console.log(Table);
  }, [Table]);

  //Determines the table size
  const saveTable = (MaxLength) => {
    setTable([createGroup(MaxLength)]);
  };

  //Creates and places the different groups then adds an ID to each group
  const saveGroup = (GroupLength) => {
    setSeatCounter(SeatCounter + GroupLength);
    const newTable = updateTable(Table, GroupLength, SeatCounter, Index);
    setTable(newTable);
    setIndex(() => Index + 1);
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

  //const display = Groups.length > 0 ? Groups : Table;

  return (
    <div className="App">
      <TableForm onCreateTable={saveTable}></TableForm>
      {Table.length > 0 && (
        <GroupForm
          onUpdateGroup={updateGroups}
          onCreateGroup={saveGroup}
          update={GroupUpdate.length >= 1 ? true : false}
        ></GroupForm>
      )}
      {Groups && (
        <Group ID={Index} group={Table} onRemove={removeGroup}></Group>
      )}
    </div>
  );
}
