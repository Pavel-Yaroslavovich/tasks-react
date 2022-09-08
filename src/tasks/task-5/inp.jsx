import React from "react";
import InpText from "./inpText";

function Inp() {
	const [text, setText] = React.useState()

	function handlChange(event) {
		setText(event.target.value)
	}

	return (
		<div>
			<input type="text" onChange={handlChange} />
			<InpText name={text} />
		</div>
	)
}

export default Inp;
