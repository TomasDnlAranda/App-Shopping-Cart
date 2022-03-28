import React from 'react';

const Precio = ({ item }) => {
	const { artista, disco, price, cantidad } = item;

	return (
		<div>
			<p className="cantidad">{cantidad}x</p>
			<p className="disco">
				{artista} - {disco}
			</p>
			<p className="price">${price * cantidad} USD</p>
		</div>
	);
};

export default Precio;
