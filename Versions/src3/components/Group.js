import React from 'react';
import GroupElement from './GroupElement';

export default function GroupCreator({ group = [[]], onRemove = (f) => f }) {
  return (
    <section>
      <div style={{ height: 50, float: 'left' }} />
      {Object.prototype.toString.call(group) === '[object Array]' ? (
        group.map((e, i) => (
          <div key={i} style={{ height: 50, float: 'left' }}>
            <GroupElement groupId={e[0].group} group={e}></GroupElement>
            <button onClick={() => onRemove(i)}>
              Die Gruppe {e[0].group} verlässt den Platz
            </button>
          </div>
        ))
      ) : (
        <div>Bisher nahm niemand beim Meister Platz</div>
      )}
    </section>
  );
}
