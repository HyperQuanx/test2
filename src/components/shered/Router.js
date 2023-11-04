// Router.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import TodoDetail from "../TodoDetail";
import Ap from "../Ap";

const Router = ({ todoList }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ap />} />
        <Route
          path="/TodoDetail/:id"
          element={<TodoDetail todoList={todoList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
