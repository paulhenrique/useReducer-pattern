import GlobalContextProvider, { useGlobalContext } from "./store";

function Counter() {
  const [state, dispatch] = useGlobalContext();

  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
function CounterB() {
  const [state, dispatch] = useGlobalContext();

  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

function JoinCounter() {
  return (
    <GlobalContextProvider>
      <Counter />
      <CounterB />
    </GlobalContextProvider>
  );
}
export default JoinCounter;
