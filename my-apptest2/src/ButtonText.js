import React, {useState } from "react";

const ButtonText = () => {
    const [showText, setShowText] = useState(false);

    const onOffText = () => {
        setShowText((showText) => !showText);
    };

    return (
        <div>
            <button onClick={onOffText}>скрыть или показать</button>
            {showText && <p>??????????????????????????</p>}
        </div>
    )
}

export default ButtonText;

