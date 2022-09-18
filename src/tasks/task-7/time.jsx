import React, { useState, useEffect } from "react";

const Time = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1)
		}, 1000)
	}, [count])

	return (
		<div>
			<button>time</button><br /><br />
			<span>{count}</span>
		</div>
	)
}

export default Time;