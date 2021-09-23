import React from 'react';
import { FaChair } from 'react-icons/fa';

export default function GroupElement({ groupId, seat, group }) {
  return group.map((e, i) => (
    <li key={i}>
      <FaChair key={i} size={16} color={e === 'empty' ? 'grey' : 'red'} />
    </li>
  ));
}
