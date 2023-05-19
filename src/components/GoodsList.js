import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
	const { goods = [] } = props;

	if (!goods.length) {
		<h3>Nothing here</h3>
	}

	return <div className='goods'>
		{goods.map(good => <GoodsItem {...good} key={good.id}/>)}
	</div>
}

export { GoodsList }