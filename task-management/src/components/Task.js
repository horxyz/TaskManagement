import Drag from "./Drag";
import { useState } from "react";

function Task() {
  const [isShowInput, setIsShowInput] = useState(true);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const showButton = (e) => {
    e.preventDefault();
    setIsShowBtn(true);
  };

  const hideButton = (e) => {
    e.preventDefault();
    setIsShowBtn(false);
  };
  // 得到Task传递的position数据用于判断input边线颜色
  const getPosition = (positionData) => {
    setPosition(positionData);
  };
  return (
    isShowInput && (
      <Drag getPosition={getPosition}>
        <div
          // 2个事件放在input会导致按钮抖动
          onMouseEnter={showButton}
          onMouseLeave={hideButton}
          className="relative"
        >
          {/* <button onClick={() => console.log(position)}>button</button> */}
          <input
            // className="flex items-center w-24 h-9 mt-4 rounded-sm border-2 border-black"
            className={
              position.x > 487 &&
              position.x < 630 &&
              position.y > -137 &&
              position.y < 116
                ? "flex items-center w-24 h-9 mt-4 rounded-sm border-2 border-green-200"
                : position.x > 1001 &&
                  position.x < 1142 &&
                  position.y > -137 &&
                  position.y < 116
                ? "flex items-center w-24 h-9 mt-4 rounded-sm border-2 border-gray-200"
                : "flex items-center w-24 h-9 mt-4 rounded-sm border-2 border-black"
            }
          ></input>
          <button
            className={
              isShowBtn
                ? "absolute top-2 right-0 font-bold block"
                : "absolute top-2 right-0 font-bold hidden"
            }
            onClick={() => setIsShowInput(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </Drag>
    )
  );
}

export default Task;
