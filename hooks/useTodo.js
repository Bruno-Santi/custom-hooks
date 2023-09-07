import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = (initialState = []) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);
  };

  const [todos, dispatch] = useReducer(
    todoReducer,
    initialState,
    init
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD_TODO",
      payload: todo,
    };
    dispatch(action);
  };

  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };
  let pendingTodos = todos.filter((todo) => !todo.done).length;
  let todosCount = todos.length;
  return {
    todos,
    pendingTodos,
    todosCount,
    handleNewTodo,
    removeTodo,
    onToggleTodo,
  };
};
