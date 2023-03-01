import React from "react";
import { Todo } from "../../../models/TodoModel";
import "./TodoCard.scss";

type TodoCardProps = {
    todo: Todo,
    removeTodo: (todo: Todo) => void,
};

function TodoCard(props: TodoCardProps) {
  return (
    <div className="TodoCard">
      <div className="TodoCard__title">{props.todo.title}</div>
      <div className={"TodoCard__infos TodoCard__infos--" + props.todo.priority.value}>
        <div className="TodoCard__item TodoCard__item--dueDate">
          {props.todo.dueDate}
        </div>
        <div className="TodoCard__item TodoCard__item--doneBtn">
          <button
            onClick={() => {
              console.log(props.todo);
              props.removeTodo(props.todo);
            }}
          >
            Done
          </button>
        </div>
        <div className="TodoCard__item TodoCard__item--priority">
          {props.todo.priority.prioText}
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
