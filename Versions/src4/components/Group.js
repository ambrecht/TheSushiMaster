import React from 'react';
import GroupElement from './GroupElement';

export default function GroupCreator({ group = [[]], onRemove = (f) => f }) {
  return (
    <section>
      <div />

      {group.map((e, i) => (
        <div key={i} className="groupContainer">
          <GroupElement groupId={e[0].group} group={e}></GroupElement>
          {e[0].group === 'empty' ? (
            <></>
          ) : (
            <button onClick={() => onRemove(i)}>
              Die Gruppe {e[0].group} verlässt den Platz
            </button>
          )}
        </div>
      ))}
    </section>
  );
}
