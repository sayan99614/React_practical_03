import React from "react";

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

  function isCompleted(id) {
    const updatedItems = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setList(updatedItems);
  }

  return (
    <div className="d-flex justify-content-between my-3">
      <div
        className={`data ${data.completed ? "text-secondary" : ""}`}
        onDoubleClick={() => {
          deleteItem(data.id);
          setShow(false);
        }}
        onClick={() => editItem(data.id)}
      >
        {data.data}
      </div>
      <div className="operations">
        <input
          className="form-check-input"
          readOnly={true}
          checked={data.completed}
          onClick={() => isCompleted(data.id)}
          type="radio"
          name={`${data.id}`}
        />
      </div>
    </div>
  );
}

export default CardList;
