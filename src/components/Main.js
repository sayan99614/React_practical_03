import React, { useState, useEffect, createContext } from "react";
import "./main.css";
import { reactLocalStorage } from "reactjs-localstorage";
import UserInput from "./UserInput";
import Card from "./Card";
import CardList from "./CardList";

function getLocalItems() {
  let list = reactLocalStorage.get(new Date().toLocaleDateString());
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

function Main(props) {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState({
    date: "",
    time: "",
  });
  const [data, setData] = useState(getLocalItems());
  const [input, setInput] = useState("");
  const [editelmid, setEditElmId] = useState(null);
  const [isedit, setIsEdit] = useState(false);
  const handleInput = (event) => {
    setInput(event.target.value);
  };
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

  useEffect(() => {
    reactLocalStorage.set(
      new Date().toLocaleDateString(),
      JSON.stringify(data)
    );
  }, [data]);
  useEffect(() => {
    let yesterday = new Date(new Date());
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday = yesterday.toLocaleDateString();
    if (localStorage.getItem(yesterday)) {
      localStorage.removeItem(yesterday);
    }
  }, []);
  const changeVisibility = () => {
    setShow(!show);
  };
  return (
    <div className="row">
      <div className="col-sm-4 offset-sm-4 text-center">
        <Card size={"w-50"} clock={time} />
        <div>
          {data.map((item) => {
            return (
              <CardList
                data={item}
                key={item.id}
                list={data}
                setList={setData}
                setShow={setShow}
                input={input}
                setInput={setInput}
                editelmid={editelmid}
                setEditElmId={setEditElmId}
                isedit={isedit}
                setIsEdit={setIsEdit}
              />
            );
          })}
        </div>
        {show && (
          <UserInput
            data={data}
            input={input}
            setInput={setInput}
            setData={setData}
            handleInput={handleInput}
            editelmid={editelmid}
            setEditElmId={setEditElmId}
            isedit={isedit}
            setIsEdit={setIsEdit}
            setShow={setShow}
          />
        )}
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
