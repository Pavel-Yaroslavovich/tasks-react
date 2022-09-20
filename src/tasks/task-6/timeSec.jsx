import React, { useState, useEffect } from "react";

const TimeSec = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1)
		}, 1000)
	}, [count])

	return (
		<div>
			<span>{count}</span>
		</div>
	)
}

export default TimeSec;