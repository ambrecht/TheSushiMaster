import React from 'react';
import GroupElement from './GroupElement';
import { createNestedArray } from '../utils/createNestedArray';

export default function GroupCreator({ groups = [[]], onRemove = (f) => f }) {
  const nestGroups = createNestedArray(groups);
  return (
    <div className="groupContainer">
      {nestGroups.map((group, i) => (
        <section key={i}>
          <ul className="grouplist">
            <div>
              <GroupElement groupId={i + 1} group={group}></GroupElement>
              <button onClick={() => onRemove(group[0])}>remove</button>
            </div>
          </ul>
        </section>
      ))}
    </div>
  );
}
