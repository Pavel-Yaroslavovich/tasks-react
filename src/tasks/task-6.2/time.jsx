import React, { useState, useEffect } from "react";

const Time = () => {
	const [seconds, setSeconds] = useState()
	const [isActive, setIsActive] = useState(false);

	const handlChange = (event) => {
		setSeconds(event.target.value)
	}

	const start = () => {
		setIsActive(true);
	}

	const reset = () => {
		setSeconds(0);
		setIsActive(false);
	}


	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setTimeout(() => {
				setSeconds(seconds => seconds - 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearTimeout(interval);
		}
		return () => clearTimeout(interval);
	}, [isActive, seconds]);

	return (
		<div>
			<input type="number" onChange={handlChange} disabled={isActive} /> &nbsp;&nbsp;
			<button onClick={start}>start</button>&nbsp;&nbsp;
			<button onClick={reset}>stop</button>
			<p>Start: {seconds}</p>

		</div>
	)
}

export default Time;