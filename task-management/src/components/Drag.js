import Draggable from "react-draggable";
import { useState } from "react";

function Drag({ children, getPosition }) {
  const initPosition = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };

  const [position, setPosition] = useState(initPosition);
  // 传递position数据给Task组件
  const handleGetPosition = () => {
    getPosition(position.deltaPosition);
  };

  const handleStart = () => {
    setPosition({
      ...position,
      activeDrags: ++position.activeDrags,
    });
  };
  const handleStop = () => {
    setPosition({
      ...position,
      activeDrags: --position.activeDrags,
    });
    handleGetPosition();
  };
  const handleDrag = (e, ui) => {
    const { x, y } = position.deltaPosition;
    setPosition({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  return (
    <>
      <Draggable onStart={handleStart} onStop={handleStop} onDrag={handleDrag}>
        {children}
      </Draggable>
    </>
  );
}

export default Drag;
