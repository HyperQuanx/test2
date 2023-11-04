import React from "react";
import { Link, useNavigate } from "react-router-dom";

function DETAIL_PAGE() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Link to="/">home로이동하기</Link>
      </div>
    </div>
  );
}

export default DETAIL_PAGE;
