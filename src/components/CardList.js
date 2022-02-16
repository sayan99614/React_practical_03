import React, { useState } from "react";

function CardList({
  data,
  list,
  setList,
  setShow,
  input,
  setInput,
  setEditElmId,
  isedit,
  setIsEdit,
}) {
  const deleteItem = (id) => {
    const updatedItems = list.filter((item) => {
      return item.id !== id;
    });

    setList(updatedItems);
  };

  const editItem = (id) => {
    setIsEdit(!isedit);
    setShow(true);
    const singleTodo = list.find((item) => {
      return item.id === id;
    });
    setInput(singleTodo.data);
    setEditElmId(id);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="data">
            <i className="fas fa-tasks ico" />
            {data.data}
          </div>
          <div className="operations">
            <i
              className="fas fa-trash-alt ico op-1"
              onClick={() => deleteItem(data.id)}
            />
            <i
              className="fas fa-pencil-alt ico op-2"
              onClick={() => editItem(data.id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
