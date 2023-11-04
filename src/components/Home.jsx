// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/TodoDetail/id">상세 페이지로 이동</Link>{" "}
      {/* 예를 들어, ID가 1인 Todo에 대한 상세 페이지로 이동 */}
    </div>
  );
}

export default Home;
