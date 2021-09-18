import React from 'react';
import GroupElement from './GroupElement';

export default function GroupCreator({ ID, group, onRemove = (f) => f }) {
  return (
    <section>
      <div style={{ height: 50 }} />
      {Object.prototype.toString.call(group) === '[object Array]' ? (
        group.map((e, i) => (
          <div className="circle-container" key={i}>
            <GroupElement groupId={i + 1} group={e}></GroupElement>
            <button onClick={() => onRemove(i)}>
              Die Gruppe {i + 1} verlässt den Platz
            </button>
          </div>
        ))
      ) : (
        <div>Bisher nahm niemand beim Meister Platz</div>
      )}
    </section>
  );
}
