import React from "react";


function TaskFour() {

	const obj = {
		a: random(),
		b: random(),
	}

	const [value, setValue] = React.useState(obj);

	function random() {
		return Math.round(1 + Math.random() * (100 + 1 - 1));
	}

	return (
		<div className='task'>
			<h1 className='title'>Задача 4</h1>
			<p className='text'>Написать компонент который отрисовывает три елемента (div), и кнопку
				(button) при нажатии на кнопку в первом и последнем (div) должны выводиться одинаковые числа, а в среднем разные рандомные
				числа от 0 до 100</p>
			<div>{value.a}</div>
			<div>{value.b}</div>
			<div>{value.a}</div>
			<button onClick={() => setValue({ a: random(), b: random(), })}>Click</button>
		</div>
	)
}

export default TaskFour;