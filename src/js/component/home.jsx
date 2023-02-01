import React, { useState } from 'react';

const Home = () => {
	let [color, setColor] = useState('')
	return (
		<div className="contenedor">
			<div className='traffic-light'>
				<div className={`light red ${color == 'red' ? 'glow-red' : ''}`}   onClick={() => setColor('red')}></div>
				<div className={`light yellow ${color == 'yellow' ? 'glow-yellow' : ''}`} onClick={() => setColor('yellow')}></div>
				<div className={`light green ${color == 'green' ? 'glow-green' : ''}`} onClick={() => setColor('green')}></div>
			</div>
		</div>
	);
};
export default Home;

