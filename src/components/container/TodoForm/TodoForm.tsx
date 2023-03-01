import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { Todo } from "../../../models/TodoModel";

type TodoFormProps = {
    addTodo: (todo: Todo) => void;
};

function TodoForm(props: TodoFormProps) {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    dueDate: "",
    priority: {
      value: "1",
      prioText: "Very High",
    },
  });

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target);
    props.addTodo(todo);
  };

  return (
    <div className="TodoForm">
      <form onSubmit={onSubmit} className="TodoForm__form">
        <textarea
          placeholder="What do you have to do?"
          onInput={(e) => {
            setTodo({ ...todo, title: (e.target as HTMLInputElement).value });
          }}
        />
        <div className="todoInfos">
          <input
            className="todoInfos__item"
            type="date"
            min="2023-01-01"
            id="dueDate"
            onInput={(e) =>
              setTodo({
                ...todo,
                dueDate: (e.target as HTMLInputElement).value,
              })
            }
          />
          <select
            className="todoInfos__item"
            id="priority"
            onInput={(e) =>
              setTodo({
                ...todo,
                priority: {
                  value: (e.target as HTMLInputElement).value,
                  prioText: (e.target as HTMLSelectElement).options[
                    (e.target as HTMLSelectElement).selectedIndex
                  ].text,
                },
              })
            }
          >
            <option value="1">Very High</option>
            <option value="2">High</option>
            <option value="3">Medium</option>
            <option value="4">Low</option>
            <option value="5">Very Low</option>
          </select>
        </div>
        <input id="addBtn" type="submit" value="Add" />
      </form>
    </div>
  );
}

export default TodoForm;
