import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, handleClick }) => {
	const { artista, disco, img, id, price } = item;

	return (
		<>
			<div className="card__container">
				<div className="card__container-img">
					<img src={img} />
				</div>
				<h3>{artista}</h3>
				<h4>{disco}</h4>
				<p>
					$<span>{price}</span> USD
				</p>
				<button data-id={id} onClick={(e) => handleClick(item)}>
					Agregar al carrito
				</button>
			</div>
		</>
	);
};

export default Card;
