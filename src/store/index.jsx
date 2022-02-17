import { useReducer, createContext, useContext, useMemo } from "react";
import { Counter, counterState } from "./reducers";

export const GlobalContext = createContext();

function StoreProvider(props) {
  const [state, dispatch] = useReducer(Counter, counterState);
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <GlobalContext.Provider value={store}>
      {props?.children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);

export default StoreProvider;
