import { useReducer, createContext, useContext, useMemo } from "react";
import { Counter } from "./reducers";

const initialState = { count: 0 };

export const GlobalContext = createContext();

function StoreProvider(props) {
  const [state, dispatch] = useReducer(Counter, initialState);
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <GlobalContext.Provider value={store}>
      {props?.children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);

export default StoreProvider;
