export const updateGroup = (GroupUpdateArr, OldGroupsArr, newGroup) => {
  const GroupNumber = GroupUpdateArr.map((e) => e.group).at(-1);
  const updateGroup = [
    ...OldGroupsArr.slice(0, GroupNumber),
    newGroup,
    ...OldGroupsArr.slice(GroupNumber),
  ];
  return updateGroup;
};
