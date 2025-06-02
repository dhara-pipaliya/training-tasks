export const addData = (payload: any) => {
  return {
    type: "ADD_USER",
    payload,
  };
};
export const deleteUser = (id: number) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const setFilter = (filter: string) => {
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};
export const searchUser = (value: any) => ({
  type: "SEARCH_USER",
  payload: value,
});
export const updateUser = (payload: any) => {
  return {
    type: "UPDATE_USER",
    payload,
  };
};
export const localStorageSetData = (payload: any) => {
  return {
    type: "LOCALSTORAGE_SET_ITEM",
    payload,
  };
};
