import React from 'react';
import { createArray } from '../utils/createArray';

import { FaChair } from 'react-icons/fa';

export default function DisplayTable({ totalSeats = 0, occupied }) {
  const newArray = createArray(totalSeats);

  return (
    <>
      {newArray.map((n, i) => (
        <FaChair size={32} color={'red'} />
      ))}
      <p>
        {occupied} of {totalSeats} stars
      </p>
    </>
  );
}
