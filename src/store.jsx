import { useReducer, createContext, useContext, useMemo } from "react";

const initialState = { count: 0 };

export const GlobalContext = createContext();

function storeReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function StoreProvider(props) {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const store = useMemo(() => [state, dispatch], [state]);
  return (
    <GlobalContext.Provider value={store}>
      {props?.children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);

export default StoreProvider;
