/** @format */

import React, { useState } from 'react';

const StateObject = () => {
  const fullName = {
		firstName: '',
		lastName: ''
	};
	const [name, setName] = useState(fullName);
	return (
		<div>
			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<h2>firstName - {name.firstName}</h2>
			<h2>lastName - {name.lastName}</h2>
			<p>{JSON.stringify(name)}</p>
		</div>
	);
};

export default StateObject;
