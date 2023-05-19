import { BasketItem } from './BasketItem';

function BasketList(props) {
	const {
		order = [],
		handleBasketShow = Function.prototype,
		removeFromBasket = Function.prototype,
		incQuantity,
		decQuantity,
	} = props;

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0);

	return (
		<ul className='collection basket-list'>
			<li className='collection-item active'>Cart</li>
			{order.length ? (
				order.map((item) => (
					<BasketItem
						key={item.id}
						removeFromBasket={removeFromBasket}
						incQuantity={incQuantity}
						decQuantity={decQuantity}
						{...item}
					/>
				))
			) : (
				<li className='collection-item'>Nothing :O</li>
			)}
			<li className='collection-item active'>
				Total : {totalPrice} uah.
			</li>
			<li className='collection-item'>
				<button className='btn btn-small'>Buy</button>
			</li>
			<i
				className='material-icons basket-close'
				onClick={handleBasketShow}
			>
				close
			</i>
		</ul>
	);
}

export { BasketList };