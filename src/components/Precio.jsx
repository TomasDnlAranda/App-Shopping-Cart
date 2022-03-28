import React from 'react';

const Precio = ({ item, handleClick, filtrar }) => {
	const { artista, disco, price, cantidad, id } = item;

	return (
		<div>
			<p className="cantidad">{cantidad === 0 ? filtrar(id) : cantidad}x</p>
			<p className="disco">
				{artista} - {disco}
			</p>
			<p className="price">${price * cantidad} USD</p>
			<i className="bi bi-x-circle" onClick={() => handleClick(id)} data-id={id}></i>
		</div>
	);
};

export default Precio;
