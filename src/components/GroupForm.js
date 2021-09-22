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
  const placeholder1 = `Der Meister kann ${
    tablelenght - counter || 0
  } Plätze belegen`;
  const placeholder2 = `Gruppe von ${Input} erstellen`;
  const placeholder3 = `Alle Plätze belegt, der Meister wartet das eine Gruppe ihren Platz verlässt`;

  const clickHandler = () => {
    counter === tablelenght ? setInput('') : setInput(Input);
    onCreateGroup(Number(Input));
  };

  const onChange = (e) => {
    e.currentTarget.value <= tablelenght
      ? setInput(e.currentTarget.value)
      : setInput(tablelenght - counter);
  };
  return (
    <div>
      {counter < tablelenght ? (
        <div>
          {placeholder1}
          <input type="number" min="1" value={Input} onChange={onChange} />
          <button onClick={clickHandler}>{placeholder2}</button>
        </div>
      ) : (
        placeholder3
      )}
    </div>
  );
}
