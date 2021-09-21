import React, { useState } from 'react';

export default function Groupform({
  onCreateGroup,
  onUpdateGroup,
  update = false,
  counter,
  maxseatrow,
  tablelenght,
}) {
  const [Input, setInput] = useState(1);
  console.log(update);
  const placeholder1 = `Der Meister kann ${
    tablelenght - counter || 0
  } Plätze belegen`;
  const placeholder2 = `Der Meister hat ${maxseatrow} freie Plätze in einer Reihe`;
  const placeholder3 = `Alle Plätze belegt, der Meister wartet das eine Gruppe ihren Platz verlässt`;
  const messager = () =>
    counter < tablelenght && !update
      ? placeholder1
      : update
      ? placeholder2
      : placeholder3;

  const clickHandler = () => {
    update ? onUpdateGroup(Number(Input)) : onCreateGroup(Number(Input));
    counter === tablelenght ? setInput('') : setInput(Input);
  };

  const onChange = (e) => {
    e.currentTarget.value <= tablelenght
      ? setInput(e.currentTarget.value)
      : setInput(tablelenght);
  };
  return (
    <div>
      {messager()}
      {counter < tablelenght && (
        <>
          <input type="number" min="1" value={Input} onChange={onChange} />
          <button onClick={clickHandler}>
            {update ? 'Gruppen Update' : `Gruppe von ${Input} erstellen`}
          </button>
        </>
      )}
    </div>
  );
}
