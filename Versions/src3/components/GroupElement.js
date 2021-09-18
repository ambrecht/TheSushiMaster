import React from 'react';
import { FaChair } from 'react-icons/fa';

export default function GroupElement({ groupId, seat, group }) {
  return (
    <div>
      Gruppe {groupId}:
      {group.map((e, i) => (
        <FaChair key={i} size={32} color={e.group === 0 ? 'grey' : 'red'} />
      ))}
    </div>
  );
}
