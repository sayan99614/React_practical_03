import React, { useContext } from "react";

function CardList({ data }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="data">
            <i class="fas fa-tasks ico" />
            {data}
          </div>
          <div className="operations">
            <i class="fas fa-trash-alt  ico" />
            <i class="fas fa-pencil-alt ico"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
