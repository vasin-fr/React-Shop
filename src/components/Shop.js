import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';

import { GoodsList } from './GoodsList';

import { Cart } from './Cart';
import { BasketList } from './BasketList'

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder([newOrder])
        }
    }

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow)
    }
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
    }


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(el => el.json()).then(data => {
            console.log(data)
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={goods.length} handleBasketShow={handleBasketShow} />
            {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
            {isBasketShow && <BasketList handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}/> }
        </main>
    )
}

export { Shop };
