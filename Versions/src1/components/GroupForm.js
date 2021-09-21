import React, { useState } from 'react';

export default function Groupform({ onCreateGroup, Group }) {
  const [Input, setInput] = useState(null);

  const clickHandler = () => {
    onCreateGroup(Number(Input));
  };
  const onChange = (e) => setInput(e.currentTarget.value);
  return (
    <div>
      <input type="Number" min="1" onChange={onChange} />
      <button onClick={clickHandler}>Gruppe erstellen</button>
    </div>
  );
}
