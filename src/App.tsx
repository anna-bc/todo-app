import React, { useState } from "react";
import "./App.scss";
import TodoList from "./components/components/TodoList/TodoList";
import TodoForm from "./components/container/TodoForm/TodoForm";
import { Todo } from "./models/TodoModel";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSortClick() {
    let done : boolean = false;
    while (!done) {
      done = true;
      for (let i = 1; i < todos.length; i++) {
        if (todos[i - 1].priority.value > todos[i].priority.value) {
          done = false;
          let tmp: Todo = todos[i - 1];
          todos[i - 1] = todos[i];
          todos[i] = tmp;
        }
      }
    }
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <TodoForm addTodo={(todo) => setTodos([...todos, todo])} />
      <TodoList
        todos={todos}
        removedTodoIdx={(idx) => {
          let newTodos: Todo[];
          newTodos = todos.filter((todo, i) => idx !== i);
          setTodos(newTodos);
        }}
        // onSortClick={() => handleSortClick}
      />
    </div>
  );
}

export default App;
