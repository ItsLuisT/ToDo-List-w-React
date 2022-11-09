import React, { useState } from "react";

const Home = () => {
  const [inputVal, setInput] = useState([]);

  function getValue(e) {
    e.preventDefault();
    let clearInput = e.target[0].value;
    setInput((current) => {
      return [...current, clearInput];
    });
    console.log(getValue);
    e.target[0].value = "";
  }
  function deleteLi(i) {
    setInput((current) => {
      return current.filter((item, index) => {
        return index != i;
      });
    });
  }

  return (
    <div className="todoList">
      <h1 className="title">Todo List</h1>
      <form onSubmit={getValue}>
        <label className="theLabel">
          Task
          <input type="text" className="actualInput" />
          </label>
      </form>
      <ul>
        {inputVal.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <button className="delete-button" onClick={() => {deleteLi(index)}}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;