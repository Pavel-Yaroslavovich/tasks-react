import React, { useState, useEffect } from "react";

const Time = () => {
	const [seconds, setSeconds] = useState(0)
	const [isActive, setIsActive] = useState(false);


	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(0);
		setIsActive(false);
	}

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setTimeout(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearTimeout(interval);
		}
		return () => clearTimeout(interval);
	}, [isActive, seconds]);

	return (
		<div>
			<button onClick={toggle}>start</button>&nbsp;&nbsp;
			<button onClick={reset}>stop</button>
			<p>{seconds}.s</p>
		</div>
	)
}

export default Time;