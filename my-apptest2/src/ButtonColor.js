import React, {useState} from 'react';
const ButtonColor = () => {
    const [color,setColor] = useState('red');

    const handleClick =()=>{
        setColor(color === 'red' ? 'blue' : 'red');
    }
    const style =  {
        color: color
    };
    
    return (
        <div>
        <button onClick={handleClick}>Сменить цвет</button>
        <p style={style}>!!!!!!!!!!!!!!!!!!!!!!!!!</p>
      </div>
    ); 
}

export default ButtonColor;

