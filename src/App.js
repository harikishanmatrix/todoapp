import { useState } from "react";

import Modal from "./Modal";
let App = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [isOpen, setIsopen] = useState(false);

  const closeModal = () => {
    setIsopen(false);
  };

  const tasksIn = () => {
    setIsopen(true);
  };

  const handleSubmit = (value) => {
    setInputValue(value);
    setInputValues([...inputValues, inputValue]);
  };

  let [btn, setBtn] = useState("+");

  return (
    <div className="border-2 border-black">
      <div>
        <div className="h-full m-2 p-2 flex justify-between">
          <h1 className="font-bold">Tasks</h1>
          <button className="font-bold" onClick={tasksIn}>
            {btn}
          </button>
        </div>
      </div>
      <div>
        {inputValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </div>

      <div>
        {<Modal open={isOpen} onClose={closeModal} submit={handleSubmit} />}
      </div>
    </div>
  );
};

export default App;
