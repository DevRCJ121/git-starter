import React from 'react'

const CountComponent = ({ count, isFetching, onPlusClick, onMinusClick }) => {
    return (
        <div>
            <button onClick={() => onMinusClick()} disabled={isFetching}>-</button>
            <h3 id="count" className='count'>{ count }</h3>
            <button onClick={() => onPlusClick()} disabled={isFetching}>+</button>
        </div>
    );
}

export default CountComponent