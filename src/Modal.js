import React, { useState } from "react";

const Modal = ({ value, setValue, array, index }) => {
  const [arr, setArr] = useState([array]);
  const [active, isActive] = useState(0);
  const handleClick = (index) => {
    console.log(index);
  };

  return (
    <div>
      <div>
        <div>
          <h1 key={index}>{arr}</h1>
        </div>

        <button onClick={() => handleClick(index)}>{arr}</button>
      </div>
    </div>
  );
};
export default Modal;
