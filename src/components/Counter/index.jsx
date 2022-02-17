import { useGlobalContext } from "../../store";

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

export default CounterB;
