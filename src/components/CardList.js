import React, { useContext } from "react";

function CardList({ data }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="data">
            <i className="fas fa-tasks ico" />
            {data.data}
          </div>
          <div className="operations">
            <i className="fas fa-trash-alt  ico" />
            <i className="fas fa-pencil-alt ico"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
