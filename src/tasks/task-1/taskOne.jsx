import React from "react";

function TaskOne() {
	const [value, setValue] = React.useState(1)
	return (
		<div className='task'>
			<h1 className='title'>Задача 1</h1>
			<p className='text'>Написать компонент, который будет выводить на экран число и кнопку, по нажатию на которую,
				число увеличивается на 1.</p>

			<button className="btn-1" onClick={() => setValue(value + 1)}>Click</button> = {value}
		</div>
	)
}

export default TaskOne;
