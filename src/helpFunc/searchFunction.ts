import { IItem } from "../interface/type";

export const searchItemsFunc = (items: IItem[], searchValue: string) => {
  const filterItems = items.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return filterItems;
};
