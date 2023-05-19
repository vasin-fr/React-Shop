import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';

import { GoodsList } from './GoodsList';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(el => el.json()).then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, [])

    useEffect(() => {console.log(goods)},[goods])

    return (
        <main className='container content'>
            {loading ? <Preloader/> : <GoodsList goods={goods}/>}
        </main>
    )
}

export { Shop };
