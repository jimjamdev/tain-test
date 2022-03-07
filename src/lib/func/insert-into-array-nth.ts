import { chunk, flatten } from 'lodash';

// insert into array every nth item

export const insertIntoArrayNth = (array = [], atIndex: number, item: any) => {
  return flatten(
    chunk(array, atIndex).map((section) =>
      section.length === atIndex ? [...section, item] : section,
    ),
  );
};
