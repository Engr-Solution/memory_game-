import { useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [items, setItems] = useState([
        {id: 1, src: '/img/angular.png', status: ''},
        {id: 1, src: '/img/angular.png', status: ''},
        {id: 2, src: '/img/css.png', status: ''},
        {id: 2, src: '/img/css.png', status: ''},
        {id: 3, src: '/img/html.png', status: ''},
        {id: 3, src: '/img/html.png', status: ''},
        {id: 4, src: '/img/js.png', status: ''},
        {id: 4, src: '/img/js.png', status: ''},
        {id: 5, src: '/img/nodejs.png', status: ''},
        {id: 5, src: '/img/nodejs.png', status: ''},
        {id: 6, src: '/img/react.png', status: ''},
        {id: 6, src: '/img/react.png', status: ''},
        {id: 7, src: '/img/scss.png', status: ''},
        {id: 7, src: '/img/scss.png', status: ''},
        {id: 8, src: '/img/vue.png', status: ''},
        {id: 8, src: '/img/vue.png', status: ''}
    ].sort(() => Math.random() - 0.4));

    const [prev, setPrev] = useState(-1);

    const check = (current) => {
        if(items[current].id === items[prev].id){
            items[current].status = 'correct';
            items[prev].status = 'correct';
            setItems([...items]);
            setPrev(-1);
        }else {
            items[current].status = 'wrong';
            items[prev].status = 'wrong';
            setItems([...items]);
            setTimeout(() => {
                items[current].status = '';
                items[prev].status = '';
                setItems([...items]);
                setPrev(-1);
            }, 800);
        }
    }

    const handleClick = (i) => {
        if(prev === -1){
            items[i].status = 'active';
            setItems([...items]);
            setPrev(i);
        }else check(i)
    }

    return (
        <div className='container'>
            { items.map((item, index) => (
                <Card key={index} item={item} i={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards;