import React from "react";
import { Todo } from "../../../models/TodoModel";
import TodoCard from "../TodoCard/TodoCard";

type TodoListProps = {
  todos: Todo[],
  removedTodoIdx: (idx: number) => void,
//   onSortClick: () => void,
};

function TodoList(props: TodoListProps) {
  return (
    <div className="listWrapper">
      <ul>
        {props.todos.map((el, i) => (
          <li key={"todo-" + i}>
            <TodoCard
              todo={el}
              removeTodo={(todo) => {
                let idx = props.todos.indexOf(todo);
                console.log(idx);
                props.removedTodoIdx(idx);
              }}
            />
          </li>
        ))}
      </ul>
      {/* <button id="sortByPrio" onClick={props.onSortClick()}>
        Sort by Priority
      </button> */}
    </div>
  );
}

export default TodoList;
