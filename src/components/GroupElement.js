import React from 'react';
import { FaChair } from 'react-icons/fa';

export default function GroupElement({ groupId, seat, group }) {
  return (
    <>
      Gruppe {groupId}:
      {group.map((e, i) => (
        <FaChair key={i} size={32} color={e === 'empty' ? 'grey' : 'red'} />
      ))}
    </>
  );
}
