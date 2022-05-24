import { useState } from "react";
import Task from "./Task";

// 点击按钮增加输入框
function AddTask() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="grid grid-flow-col grid-rows-6 justify-items-center">
      {Array.from(Array(counter)).map((c, index) => {
        return (
            <Task
              key={c}
            ></Task>
        );
      })}
      <button
        className="flex-none flex items-center justify-center w-9 h-9 mt-4 rounded-full text-gray-400 border border-gray-300 bg-gray-50"
        onClick={handleClick}
      >
        +
      </button>
    </div>
  );
}

export default AddTask;
