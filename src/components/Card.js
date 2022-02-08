import React from "react";

function Card(props) {
  return (
    <div className={`card-jumbo shadow-sm mx-auto ${props.size}`}>
      <div className="card-body">
        {props && (
          <>
            <h5 className="mb-3">TODO LIST</h5>
            <div className="clock">
              <p>{props.clock.time}</p>
              <p>{props.clock.date}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
