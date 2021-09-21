import React from 'react';
import GroupElement from './GroupElement';
import { createNestedArray } from '../utils/createNestedArray';

export default function GroupCreator({ groups = [[]], onRemove = (f) => f }) {
  const nestGroups = createNestedArray(groups);
  return (
    <div>
      {nestGroups.map((group, i) => (
        <section key={i}>
          <div style={{ height: 50, float: 'left' }}>
            <GroupElement groupId={i + 1} group={group}></GroupElement>
            <button onClick={() => onRemove(group[0])}>
              Die Gruppe verlässt den Platz
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
