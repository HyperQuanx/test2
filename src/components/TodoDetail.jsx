import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

function TodoDetail() {
  const { id } = useParams(); // 동적 매개변수(id)를 가져옵니다.
  const { todo, list } = useParams();

  // 여기에서 해당 id를 기반으로 todo 항목의 세부 정보를 가져오고 표시합니다.

  return (
    <div>
      <div className="detail-page">
        <div>
          <div>
            <Link to="/">홈으로 이동하기</Link>
          </div>
          <div>
            <h2>Todo 상세 페이지</h2>
            <p>Todo ID: {id}</p>
            <p>Todo Title:{todo} </p>
            <p>Todo Content:{list} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
