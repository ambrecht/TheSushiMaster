import React from 'react';
import GroupElement from './GroupElement';
import { createNestedArray } from '../utils/createNestedArray';

export default function GroupCreator({
  ID,
  groups = [[]],
  onRemove = (f) => f,
}) {
  const nestGroups = createNestedArray(groups);
  return (
    <div className="groupContainer">
      {nestGroups.map((group, i, arr) => (
        <section key={i}>
          <ul key={i} className="grouplist">
            <div key={i}>
              <GroupElement groupId={i + 1} group={group}></GroupElement>
              {`Gruppe ${group[0]}`}
              {!group.includes('empty') && (
                <button onClick={() => onRemove(group[0])}>remove</button>
              )}
            </div>
          </ul>
        </section>
      ))}
    </div>
  );
}
