import React from "react";


function TaskTwo() {
	const [text, setText] = React.useState()

	function handleChange(event) {
		setText(event.target.value)
	}

	return (
		<div className='task'>
			<h1 className='title'>Задача 2</h1>
			<p className='text'>Написать компонент в котором будет отрисовываться два инпута,
				один из которых будет задизейблен, при изменений инпута который не задизейблен,
				должно обновлятся значение двух инпутов</p>
			<input type="text" onChange={handleChange} /><br />
			<input value={text} type="text" disabled />
		</div>
	)
}

export default TaskTwo;
