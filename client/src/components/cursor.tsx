import React, {useState, useEffect, useRef} from 'react'

const NUM_TRAIL_ELEMENTS = 10;

const CustomCursor = () => {
  const [cursorPositions, setCursorPositions] = useState(
    new Array(NUM_TRAIL_ELEMENTS).fill({ x: -100, y: -100 })
  );

  const handleMouseMove = (e) => {
    const newPositions = [...cursorPositions];
    newPositions.pop();
    newPositions.unshift({ x: e.clientX, y: e.clientY });
    setCursorPositions(newPositions);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorPositions]);

  return (
    <>
      {cursorPositions.map((position, index) => (
        <div
          key={index}
          className="custom-cursor"
          style={{
            left: position.x + 'px',
            top: position.y + 'px',
            opacity: 1 - (index / NUM_TRAIL_ELEMENTS),
          }}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;