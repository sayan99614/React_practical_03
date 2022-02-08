import React, { useState, useEffect, createContext } from "react";
import "./main.css";
import UserInput from "./UserInput";
import Card from "./Card";
import CardList from "./CardList";
function Main(props) {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState({
    date: "",
    time: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  const accodian = (event) => {
    if (show === true && event.key === "Escape") {
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
        <Card size={"w-50"} clock={time} />
        <div>
          {data.map((item, index) => {
            return <CardList data={item} key={index} />;
          })}
        </div>
        {show && <UserInput data={data} setData={setData} />}
        <button
          onClick={changeVisibility}
          className="btn btn-primary mt-2 mb-5"
        >
          <i className={`fas fa-${show ? `minus` : `plus`} fa-lg`} />
        </button>
      </div>
    </div>
  );
}

export default Main;
