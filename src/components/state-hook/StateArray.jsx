/** @format */

import React, { useState } from 'react';

const StateArray = () => {
	const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1)
      }
    ])
  };
	return (
		<div>
			<button onClick={addItems}>Add items</button>

			{items.map(item => (
        <span key={item.id}>{item.value}{' '}</span>
			))}
		</div>
	);
};

export default StateArray;
