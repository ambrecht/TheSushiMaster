import React from 'react';
import { FaChair } from 'react-icons/fa';

export default function GroupElement({ groupId, seat, group }) {
  return (
    <div>
      <ul className="grouplist">
        {group.map((e, i) => (
          <>
            <li>
              <FaChair
                key={i}
                size={32}
                color={e.group === 'empty' ? 'grey' : 'red'}
              />
              <div>Platz{e.seat}</div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
