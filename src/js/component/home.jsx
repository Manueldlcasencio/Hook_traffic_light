import React, { useState, useEffect } from 'react';
let aux1 = null

const Home = () => {
	let [color, setColor] = useState('')
	let [active, setActive] = useState(false)

	let aux = ['green', 'yellow', 'red']


	useEffect(() => {
		if (active == true && color == '') {
			setColor('green')
			let count = 1
			let int = setInterval(() => {
			setColor(aux[count])
			count++
			if (count > 2) count = 0
		}, 1000);
		aux1 = int
		setActive(false)}
		else if (active == true && !color == '') {
			clearInterval(aux1)
			setColor('')
			setActive(false)
		}
	})
	
	return (
		<div className="contenedor">
			<div className='traffic-light'>
				<div className={`light red ${color == 'red' ? 'glow-red' : ''}`}   onClick={() => setColor('red')}></div>
				<div className={`light yellow ${color == 'yellow' ? 'glow-yellow' : ''}`} onClick={() => setColor('yellow')}></div>
				<div className={`light green ${color == 'green' ? 'glow-green' : ''}`} onClick={() => setColor('green')}></div>
				<button type="button" className="btn btn-secondary" onClick={() => setActive(true)}>{color == '' ? 'Active' : 'Deactive'}</button>
			</div>
		</div>
	);
};
export default Home;

