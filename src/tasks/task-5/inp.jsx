import React from "react";

function Inp({ onChange }) {

	function handlChange(event) {
		onChange(event.target.value)
	}

	return (
		<div>
			<input type="text" onChange={handlChange} />
		</div>
	)
}

export default Inp;
