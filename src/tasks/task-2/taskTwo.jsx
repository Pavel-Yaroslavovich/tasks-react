import React from "react";

function TaskTwo() {
	const [value, setValue] = React.useState()

	return (
		<div className='task'>
			<h1 className='title'>Задача 2</h1>
			<p className='text'>Написать компонент в котором будет отрисовываться два инпута,
				один из которых будет задизейблен, при изменений инпута который не задизейблен,
				должно обновлятся значение двух инпутов</p>
			<input value={value} type="text" disabled /><br />
			<input value={value} type="text" onChange={event => setValue(event.target.value)} />
		</div>
	)
}

export default TaskTwo;
