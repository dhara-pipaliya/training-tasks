export interface IUser {
  id: number;
  gender: string;
  name: string;
  birthDate: string;
}
export interface IState {
  user: IUser[];
  searchUsers: IUser[];
  search: string;
}

const localStorageGetItems = (key: string) => {
  if (typeof window !== "undefined") {
    const data: any = localStorage.getItem(key);
    const parseData = data ? JSON.parse(data) : null;
    return parseData;
  }
};

const localStorageSetItems = (key: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, data);
    return data;
  }
};

export const initialState: IState = {
  user: localStorageGetItems("users") || [],
  searchUsers: [],
  search: "",
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, { ...action.payload, id: Date.now() }],
      };
    case "DELETE_USER": {
      const newUserList = state?.user?.filter(
        (user) => user.id !== action.payload
      );
      const newSearchUsers = state?.searchUsers?.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        user: newUserList,
        searchUsers: newSearchUsers,
      };
    }
    case "UPDATE_USER": {
      const updatedUserList = state?.user?.map((u) =>
        u.id === action.payload.id ? { ...u, ...action.payload } : u
      );
      const updatedSearchUsers = state?.searchUsers?.map((u) =>
        u.id === action.payload.id ? { ...u, ...action.payload } : u
      );
      return {
        ...state,
        user: updatedUserList,
        searchUsers: updatedSearchUsers,
      };
    }
    case "SEARCH_USER":
      return {
        ...state,
        search: action.payload,
        searchUsers: state.user.filter((user) =>
          user.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "LOCALSTORAGE_SET_ITEM":
      localStorageSetItems(
        action.payload.key,
        JSON.stringify(action.payload.data)
      );
      return { ...state };
    default:
      return state;
  }
};
