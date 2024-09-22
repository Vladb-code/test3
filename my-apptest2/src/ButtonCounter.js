import React, {useState} from "react";

const ButtonCounter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((count) => count + 1);
      };
    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>нажать</button>
        </div>
    )
}

export default ButtonCounter;