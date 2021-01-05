import { createContext, useReducer } from "react";
import { AsyncStorage } from "react-native";

export const Context = createContext();

const initialState = {
  isLogin: false, //sementara
  user: null,
};

const storage = AsyncStorage || localStorage;

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      storage.setItem("token", action.payload.token);
      return {
        ...state,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          fullName: action.payload.fullName,
        },
        isLogin: true,
      };

    case "AUTH_ERROR":
    case "LOGIN_FAILED":
      return {
        ...state,
        isLogin: false,
      };
    case "LOADED":
      return {
        ...state,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          fullName: action.payload.fullName,
        },
        isLogin: true,
      };
    case "LOGOUT":
      storage.removeItem("token");
      return {
        ...state,
        user: null,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
