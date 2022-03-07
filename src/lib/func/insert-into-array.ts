import produce from 'immer';

export const insertIntoArray = (array = [], atIndex: number, toInsert: any) => {
  return produce(array, (draft: any) => {
    draft.splice(atIndex, 0, toInsert);
  });
};
