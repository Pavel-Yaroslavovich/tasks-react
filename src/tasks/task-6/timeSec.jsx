import React, { useState, useEffect } from "react";

const TimeSec = () => {
	const [currentCount, setCount] = useState(0);
	const timer = () => setCount(currentCount + 1);

	useEffect(
		() => {
			if (currentCount >= 10) {
				return;
			}
			const id = setInterval(timer, 1000);
			return () => clearInterval(id);
		},
	);

	return (
		<div>
			<span>{currentCount}</span>
		</div>
	)
}

export default TimeSec;
