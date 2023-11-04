import React, { useState, useRef } from "react";

import "../App.css";
import TodoList from "./TodoList";

function Ap() {
  const [todoList, setTodoList] = useState([
    {
      id: Date.now(),
      todo: "리액트 공부하기",
      list: "리액트 기초를 공부해봅시다.",
      completed: false,
    },
  ]);

  const [todo, setTodo] = useState("");
  const [list, setList] = useState("");

  const todoInputRef = useRef();
  const listInputRef = useRef();

  const addTodo = (event) => {
    setTodo(event.target.value);
  };

  const addList = (event) => {
    setList(event.target.value);
  };

  const clickButton = () => {
    const todoValue = todoInputRef.current.value;
    const listValue = listInputRef.current.value;

    if (!todoValue || !listValue) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const addTodoList = {
      id: Date.now() + Math.random(),
      todo: todoValue,
      list: listValue,
      completed: false,
    };

    setTodoList((prevTodoList) => [...prevTodoList, addTodoList]);
    todoInputRef.current.value = "";
    listInputRef.current.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      clickButton(event);
    }
  };

  const deleteClick = (id) => {
    const newTodoList = todoList.filter((td) => td.id !== id);
    setTodoList(newTodoList);
  };

  const completeClick = (id) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <div id="root">
        <div className="layout">
          <div className="container">
            <div>My Todo List</div>
          </div>
          <div className="add-form">
            <div className="input-group">
              <label className="form-label">제목</label>
              <input
                className="add-input"
                ref={todoInputRef}
                onKeyPress={handleKeyPress}
              />
              <label className="form-label">내용</label>
              <input
                className="add-input"
                ref={listInputRef}
                onKeyPress={handleKeyPress}
              />
            </div>

            <button className="add-button" onClick={clickButton}>
              추가하기
            </button>
          </div>
          <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
            <div className="list-wrapper">
              {todoList.map(function (item) {
                if (!item.completed) {
                  return (
                    <div>
                      <TodoList
                        key={item.id}
                        item={item}
                        deleteClick={deleteClick}
                        completeClick={completeClick}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <h2 className="list-title">Done..! 🎉</h2>
            <div className="list-wrapper">
              {todoList.map(function (item) {
                if (item.completed) {
                  return (
                    <TodoList
                      key={item.id}
                      item={item}
                      deleteClick={deleteClick}
                      completeClick={completeClick}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ap;
