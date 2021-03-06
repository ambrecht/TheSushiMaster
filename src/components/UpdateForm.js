import React, { useState } from 'react';

export default function Groupform({
  onCreateGroup,
  onUpdateGroup,
  update = false,
  counter,
  maxseatrow,
  tablelenght,
  empty,
}) {
  const [Input, setInput] = useState(1);
  const placeholder2 = `Der Meister hat insgesamt ${empty} frei Plätze und davon ${maxseatrow} in einer Reihe`;
  const placeholder3 = `Alle Plätze belegt, der Meister wartet das eine Gruppe ihren Platz verlässt`;
  const messager = () => (counter < tablelenght ? placeholder2 : placeholder3);

  const clickHandler = () => {
    onUpdateGroup(Number(Input));
  };

  const onChange = (e) => {
    e.currentTarget.value <= maxseatrow
      ? setInput(e.currentTarget.value)
      : setInput(maxseatrow);
  };
  return (
    <div>
      {messager()}
      {counter < tablelenght && (
        <>
          <input type="number" min="1" value={Input} onChange={onChange} />
          <button onClick={clickHandler}>Gruppen Update</button>
        </>
      )}
    </div>
  );
}
