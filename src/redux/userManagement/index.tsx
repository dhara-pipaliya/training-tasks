export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export type Filter = "allRoles" | "Admin" | "Moderator" | "User";

export interface IState {
  user: IUser[];
  filter: Filter;
  searchUser: string;
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
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }
};

export const initialState: IState = {
  user: localStorageGetItems("userCard") || [],
  filter: "allRoles",
  searchUser: "",
};

export const userManagementReducer = (
  state = initialState,
  action: any
): IState => {
  switch (action.type) {
    case "ADD_USER":
      console.log("== action.payload ==>", action);
      return {
        ...state,
        user: [...state.user, { ...action.payload, id: Date.now() }],
      };
    case "DELETE_USER":
      return {
        ...state,
        user: state.user.filter((user) => user.id !== action.payload),
      };

    case "UPDATE_USER":
      return {
        ...state,
        user: state.user.map((u) =>
          u.id === action.payload.id ? { ...action.payload } : u
        ),
      };
    case "SEARCH_USER":
      return {
        ...state,
        searchUser: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "LOCALSTORAGE_SET_ITEM":
      localStorageSetItems(action.payload.key, action.payload.data);
      return { ...state };
    default:
      return state;
  }
};
