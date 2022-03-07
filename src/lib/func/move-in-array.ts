import produce from 'immer';

export const moveInArray = (array = [], fromIndex: number, toIndex: number) => {
  return produce(array, (draft: any) => {
    draft.splice(toIndex, 0, draft.splice(fromIndex, 1)[0]);
  });
};
