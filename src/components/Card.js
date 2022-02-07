import React from "react";

function Card(props) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="data">{props.data}</div>
          <div className="operations"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
