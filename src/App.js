import { useState } from "react";
import Modal from "./Modal";
let App = () => {
  const arr = ["hello", "hi", "thanks"];
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>
        {arr.map((array, index) => (
          <Modal
            key={index}
            value={value}
            setValue={setValue}
            array={array}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
