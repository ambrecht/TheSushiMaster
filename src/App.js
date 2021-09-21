import React, { useState, useEffect } from 'react';
import TableForm from './components/TableForm';
import GroupForm from './components/GroupForm';
import Group from './components/Group';
import { createGroup } from './utils/createGroup';
import { updateGroup } from './utils/updateGroup';
import { maxSeatCalculator } from './utils/maxSeatCalculator';

export default function App() {
  //The entire state of the application is located here
  const [Table, setTable] = useState([]);
  const [Groups, setGroups] = useState([]);
  const [SeatCounter, setSeatCounter] = useState(0);
  const [Index, setIndex] = useState(1);
  const [UpdateStatus, setUpdateStatus] = useState(false);
  const [MaxSeatRow, setMaxSeatRow] = useState(0);

  useEffect(() => {
    console.log(Groups);
    setMaxSeatRow(maxSeatCalculator(Groups));
  }, [Groups, MaxSeatRow]);

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

  //Updates the groups when the table is full and the first groups leave it.
  const updateGroups = (GroupLength) => {
    if (SeatCounter + GroupLength > Table.length)
      console.log('Der Meister hat keinen Platz...');
    else {
      const update = updateGroup(Groups, GroupLength, Index);
      setSeatCounter(SeatCounter + GroupLength);
      console.log('Update', update);
      setGroups(updateGroup(update));
    }
  };
  const removeGroup = (GroupID) => {
    const remove = Groups.map((e) => (e === GroupID ? (e = 'empty') : e));
    const groupLength = Groups.filter((g) => g === GroupID);
    console.log(groupLength);
    setGroups(remove);
    setUpdateStatus(true);
    setSeatCounter(SeatCounter - groupLength.length);
  };

  return (
    <div>
      {Table.length > 0 ? (
        <GroupForm
          onUpdateGroup={updateGroups}
          onCreateGroup={saveGroup}
          counter={SeatCounter}
          update={UpdateStatus}
          maxseatrow={MaxSeatRow}
          tablelenght={Table.length}
        ></GroupForm>
      ) : (
        <TableForm onCreateTable={saveTable}></TableForm>
      )}
      <Group ID={Index} groups={Groups} onRemove={removeGroup}></Group>
    </div>
  );
}
