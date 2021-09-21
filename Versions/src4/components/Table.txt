import React from 'react';
import { createArray } from '../utils/createArray';

import { FaBeer } from 'react-icons/fa';

export default function DisplayTable({ totalSeats = 0, occupied, group }) {
  const total = createArray(totalSeats);
  //const newArray = group[0] ? group.flat() : createArray(totalSeats);

  return (
    <>
      {total.map((n, i) => (
        <FaBeer key={i} size={32} color={i > 1 ? 'red' : 'grey'} />
      ))}
      <p>
        {occupied} of {totalSeats} stars
      </p>
    </>
  );
}
