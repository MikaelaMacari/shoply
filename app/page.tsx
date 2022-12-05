"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";
import { RootState } from "../store/store";
const HomePage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Value of counter is: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="w-full h-10 bg-green-400/50"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="w-full h-10 bg-red-400/50"
      >
        Decrement
      </button>
    </>
  );
};
export default HomePage;
