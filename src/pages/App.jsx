import GlobalContextProvider from "../store";
import { Counter } from "../components";

function App() {
  return (
    <GlobalContextProvider>
      <Counter />
      <Counter />
    </GlobalContextProvider>
  );
}
export default App;
