import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

export function List() {
  const [list, setList] = useState(initalList);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.length === 0) return;
    const newTaskObj = {
      description: newTask,
      deadline: "2024/01/14",
      index: list.length + 1,
    };
    setList((previousState) => [...previousState, newTaskObj]);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button disabled={newTask === ""} onClick={addTask}>
        Add item
      </button>
      <ul>
        {list.map((listItem) => (
          <ListItem
            key={listItem.index}
            description={listItem.description}
            deadline={listItem.deadline}
          />
        ))}
      </ul>
    </div>
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
