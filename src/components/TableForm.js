import React, { useState } from 'react';

export default function TableForm({ onCreateTable, Table }) {
  const [Input, setInput] = useState(1);
  const warn = 'Bitte eine Zahl größer Null eingeben.';

  const clickHandler = () => {
    onCreateTable(Number(Input));
  };

  const onChange = (e) => setInput(e.currentTarget.value);
  return (
    <div>
      Wie groß ist der Tisch des Meisters heute?
      <input type="Number" min="1" onChange={onChange} />
      {Input < 1 ? (
        <p>{warn}</p>
      ) : (
        <button onClick={clickHandler}>Plätze eröffnen</button>
      )}
    </div>
  );
}
