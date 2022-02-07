import React, { useState, useEffect } from "react";
import "./main.css";
import UserInput from "./UserInput";
import TodoImg from "../images/todo.png";
import Card from "./Card";
function Main(props) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    {
      task: "1",
    },
    {
      task: "2",
    },
    {
      task: "3",
    },
  ]);

  const accodian = (event) => {
    if (show === true) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", accodian);
    return () => {
      document.removeEventListener("keydown", accodian);
    };
  }, [show]);

  const changeVisibility = () => {
    setShow(!show);
  };
  return (
    <div className="row">
      <div className="col-sm-4 offset-sm-4 text-center">
        <div className="img-con mt-3">
          <img src={TodoImg} alt="todo" className="img" />
        </div>
        <button onClick={changeVisibility} className="btn btn-primary mt-2">
          <i className={`fas fa-${show ? `minus` : `plus`} fa-lg`} />
        </button>
        <div>
          {data.map((item, index) => {
            return <Card data={item.task} />;
          })}
        </div>
        {show && <UserInput />}
      </div>
    </div>
  );
}

export default Main;
