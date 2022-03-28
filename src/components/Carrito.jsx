import React, { useEffect, useState } from 'react';
import Precio from './Precio';

const Carrito = ({ products }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const priceTotal = products.reduce((acc, current) => acc + current.cantidad * current.price, 0);
		return setTotal(priceTotal);
	}, [products]);

	return (
		<>
			<div className="carrito__container">
				<h3>Precio Total</h3>
				{products.map((item) => (
					<Precio item={item} key={item.id} />
				))}
				<p className="total">Total de la orden: ${total} USD</p>
				<button>Pagar</button>
			</div>
		</>
	);
};

export default Carrito;
