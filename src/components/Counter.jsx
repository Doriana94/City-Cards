import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

const Counter= () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="mb-5 pl-28">Conteggio: {count}</p>
      <button
        className="bg-black border border-transparent rounded w-28 h-8 mr-3 ml-28 active:border-white"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Incrementa +
      </button>
      <button
        className="bg-black border border-transparent rounded w-28 h-8 active:border-white"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrementa -
      </button>
    </div>
  );
};

export default Counter;
