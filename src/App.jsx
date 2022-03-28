import Navbar from './components/Navbar';
import Product from './components/Product';
import Carrito from './components/Carrito';
import { useState } from 'react';

function App() {
	const [products, setProducts] = useState([]);

	const dataArr = (product) => {
		const index = products.findIndex((item) => item.id === product.id);
		if (index === -1) {
			setProducts((old) => [...old, product]);
		} else {
			const sumarCantidad = products.map((item) =>
				item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
			);
			setProducts(sumarCantidad);
		}
	};

	const handleClick = (id) => {
		const restar = products.map((item) =>
			item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
		);
		setProducts(restar);
	};

	const filtrar = (id) => {
		const filtrar = products.filter((product) => product.cantidad !== 0);
		setProducts(filtrar);
	};
	return (
		<>
			<Navbar />
			<div className="container-all">
				<Product dataArr={dataArr} />
				<Carrito products={products} handleClick={handleClick} filtrar={filtrar} />
			</div>
		</>
	);
}

export default App;
