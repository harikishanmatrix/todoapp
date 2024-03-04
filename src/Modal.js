import React, { useState } from "react";

const Modal = ({ value, setValue, array, indexes, index }) => {
  const [arr, setArr] = useState([array]);

  const handleClick = (index) => {
    console.log(index);
    setValue(index);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleClick(index)}
          className="bg-black text-white"
        >
          {arr}
        </button>
        {indexes && <h1 key={index}>{arr}</h1>}
      </div>
    </div>
  );
};
export default Modal;
