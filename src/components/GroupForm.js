import React, { useState } from 'react';

export default function Groupform({
  onCreateGroup,
  onUpdateGroup,
  update = false,
}) {
  const [Input, setInput] = useState(null);

  const clickHandler = () => {
    update ? onUpdateGroup(Number(Input)) : onCreateGroup(Number(Input));
  };

  const onChange = (e) => setInput(e.currentTarget.value);
  return (
    <div>
      <input type="Number" min="1" onChange={onChange} />
      <button onClick={clickHandler}>
        {update ? 'Gruppen Update' : 'Gruppe erstellen'}
      </button>
    </div>
  );
}
