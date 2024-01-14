import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

export function List() {
  const [list, setList] = useState(initalList);

  //   useEffect(() => {
  //     console.log(list);
  //   }, [list]); //dependency on certain changes

  useEffect(() => {
    console.log("something");
  }); //no dependency = all the changes

  useEffect(() => {
    console.log("hello");
  }, []); // empty dependency array = only when when component mounts;

  const addTask = () => {
    const newTask = {
      description: "New task",
      deadline: "2024/01/14",
      index: list.length + 1,
    };
    setList((previousState) => [...previousState, newTask]);
  };
  return (
    <ul>
      <WatchCount />
      <button onClick={addTask}>Add item</button>
      {list.map((listItem) => (
        <ListItem
          key={listItem.index}
          description={listItem.description}
          deadline={listItem.deadline}
        />
      ))}
    </ul>
  );
}

function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
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
