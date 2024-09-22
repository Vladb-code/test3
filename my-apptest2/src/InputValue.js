import React, { useState } from 'react';

const InputValue = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
}

export default InputValue;