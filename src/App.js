import GlobalContextProvider from "./store";
import { Counter } from "./components";

function JoinCounter() {
  return (
    <GlobalContextProvider>
      <Counter />
      <Counter />
    </GlobalContextProvider>
  );
}
export default JoinCounter;
