import Router from "./shered/Router";
import { Link } from "react-router-dom";

const TodoList = ({ item, deleteClick, completeClick }) => {
  return (
    <div className="todo-container" key={item.id}>
      <Link to={`/TodoDetail/${item.id}`}>상세 페이지로 이동</Link>
      <div>
        <h2 className="todo-title">{item.todo}</h2>
        <div>{item.list}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => deleteClick(item.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => completeClick(item.id)}
        >
          {item.completed ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
