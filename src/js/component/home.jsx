import React, { useState } from 'react';

const Home = () => {
	let [color, setColor] = useState('')
	// Div al inicio o no seleccionado
	let colY = <div className='light yellow' onClick={() => setColor('yellow')}></div>
	let colR = <div className='light red' onClick={() => setColor('red')}></div>
	let colG = <div className='light green' onClick={() => setColor('green')}></div>
	// Cambio de div al seleccionar
	if (color=="yellow") {colY = <div className='light yellow glow-yellow' onClick={() => setColor('yellow')}></div>}
	else if (color=="red") {colR = <div className='light red glow-red' onClick={() => setColor('red')}></div>}
	else if (color=="green") {colG = <div className='light green glow-green' onClick={() => setColor('green')}></div>}
	// Componente exportado
	return (
		<div className="contenedor">
			<div className='traffic-light'>
				{colR}
				{colY}
				{colG}
			</div>
		</div>
	);
};
export default Home;
