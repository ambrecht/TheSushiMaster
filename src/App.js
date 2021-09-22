import React, { useState, useEffect } from 'react';
import TableForm from './components/TableForm';
import GroupForm from './components/GroupForm';
import UpdateForm from './components/UpdateForm';
import Group from './components/Group';
import { createGroup } from './utils/createGroup';
import { updateGroup } from './utils/updateGroup';
import { maxSeatCalculator } from './utils/maxSeatCalculator';
import './styles.css';

//The whole application runs in 4 phases:

//1st phase Determine table size and create table.
//2nd phase Create groups and place the groups.
//3rd phase Remove groups from the table.
//4th phase Place new groups and Update the table

export default function App() {
  //The entire state of the application is located here
  const [Table, setTable] = useState([]);
  const [Groups, setGroups] = useState([]);
  const [SeatCounter, setSeatCounter] = useState(0);
  const [Index, setIndex] = useState(1);
  const [UpdateStatus, setUpdateStatus] = useState(false);
  const [MaxSeatRow, setMaxSeatRow] = useState(0);
  const [EmptySeats, setEmptySeats] = useState(0);

  useEffect(() => {
    setMaxSeatRow(maxSeatCalculator(Groups));
    setEmptySeats(Groups.filter((seat) => seat === 'empty'));
  }, [Groups]);

  //Determines the table size
  const saveTable = (MaxLength) => {
    setTable(createGroup(MaxLength));
  };

  //Creates and places the different groups then adds an ID to each group
  const saveGroup = (GroupLength) => {
    if (SeatCounter + GroupLength > Table.length)
      console.log('Der Meister hat keinen Platz...');
    else {
      const newGroup = createGroup(GroupLength, Index);
      return (
        setGroups([...Groups, ...newGroup]),
        setIndex(() => Index + 1),
        setSeatCounter(SeatCounter + GroupLength)
      );
    }
  };

  const removeGroup = (GroupID) => {
    const remove = Groups.map((e) => (e === GroupID ? (e = 'empty') : e));
    const groupLength = Groups.filter((g) => g === GroupID);
    setGroups(remove);
    setUpdateStatus(true);
    setEmptySeats(Groups.filter((seat) => seat === 'empty'));
    setSeatCounter(SeatCounter - groupLength.length);
  };

  //Updates the groups when the table is full and the first groups leave it.
  const updateGroups = (GroupLength) => {
    if (Groups.length + GroupLength - EmptySeats.length > Table.length)
      console.log('Der Meister hat keinen Platz...');
    else if (GroupLength > MaxSeatRow)
      console.log('Nicht genug Plätze in einer Reihe');
    else if (Groups.length + GroupLength - EmptySeats.length <= Table.length) {
      console.log('Platziere Gäste');
      setSeatCounter(SeatCounter + GroupLength);
      setIndex(() => Index + 1);
      setGroups(updateGroup(Groups, GroupLength, Index));
    }
  };

  return (
    <div className="App">
      {Table.length > 0 && !UpdateStatus ? (
        <GroupForm
          onUpdateGroup={updateGroups}
          onCreateGroup={saveGroup}
          counter={SeatCounter}
          update={UpdateStatus}
          maxseatrow={MaxSeatRow}
          tablelenght={Table.length}
        ></GroupForm>
      ) : UpdateStatus ? (
        <UpdateForm
          onUpdateGroup={updateGroups}
          onCreateGroup={saveGroup}
          counter={SeatCounter}
          update={UpdateStatus}
          maxseatrow={MaxSeatRow}
          tablelenght={Table.length}
        ></UpdateForm>
      ) : (
        <TableForm onCreateTable={saveTable}></TableForm>
      )}
      <Group ID={Index} groups={Groups} onRemove={removeGroup}></Group>
      <p>Arrayübersicht: {`[${Groups}]`}</p>
    </div>
  );
}
