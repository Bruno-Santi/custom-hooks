import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const value = 1;
  const increment = () => {
    setCounter((current) => current + value);
  };
  const decrement = () => {
    setCounter((current) => current - value);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
