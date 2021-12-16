const Card = ({item, i, handleClick}) => {
    const itemClass = item.status ? ' active ' + item.status : '';
    return (
        <div className={'card' + itemClass} onClick={() => handleClick(i)}>
            <img src={item.src } alt='' />
        </div>
    )
}

export default Card