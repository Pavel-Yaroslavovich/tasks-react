import React from "react";


function TaskThree() {
	const obj = {
		a: random(),
		b: random(),
		c: random(),
	}

	const [value, setValue] = React.useState(obj);

	function random() {
		return Math.round(1 + Math.random() * (100 + 1 - 1));

	}

	return (
		<div className='task'>
			<h1 className='title'>Задача 3</h1>
			<p className='text'>Написать компонент который отрисовывает три елемента (div), и кнопку
				(button) при нажатии на кнопку в трех елементах (div) должны выводиться разные рандомные
				числа от 0 до 100</p>

			<div>{value.a}</div>
			<div>{value.b}</div>
			<div>{value.c}</div>
			<button onClick={() => setValue({ a: random(), b: random(), c: random() })}>Random</button>
		</div>
	)
}

export default TaskThree;