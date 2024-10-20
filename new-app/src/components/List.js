import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

export function List() {
  const [toDoItem, setToDoItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    if (!toDoItem) return alert("Wait a minute");
    setList((previousList) => [...previousList, toDoItem]);
    setToDoItem("");
  };
  return (
    <div>
      <Clock />
      <DateComp />
      <input
        type="text"
        value={toDoItem}
        onChange={(e) => setToDoItem(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {list.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{time}</div>;
}

function DateComp() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <p>Current time: {time.toUTCString()}</p>
    </>
  );
}

const initalList = [
  {
    description: "One task",
    deadline: "2024/01/14",
    index: 0,
  },
  {
    description: "Another task",
    deadline: "2024/01/14",
    index: 2,
  },
  {
    description: "Yet different task",
    deadline: "2024/01/14",
    index: 3,
  },
];
