import React from 'react';
import { FaChair } from 'react-icons/fa';

export default function GroupElement({ groupId, seat, group }) {
  return (
    <div>
      Gruppe {groupId}:
      {group.map((e, i) => (
        <li>
          <FaChair size={32} color={seat ? 'grey' : 'red'} />
        </li>
      ))}
    </div>
  );
}
