/** @format */

import React, { useState } from 'react';

const HookCOunterTwo = () => {
	const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevState => prevState + 1)
    }
  }
	return (
		<div>
			count: {count}
			<button onClick={() => setCount(initialState)}>Reset</button>
			<button onClick={() => setCount(prevState => prevState + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevState => prevState - 1)}>
				Decrement
			</button>
			<button onClick={incrementBy5}>Increment By 5</button>
		</div>
	);
};

export default HookCOunterTwo;
