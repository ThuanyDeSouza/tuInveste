import React from 'react'
import './styles.css'

const ItemRange = (props) => {

    return (
        <div className='itemRange'>
            <span className='value'>
                <span className='value'>{props.value} meses</span>
            </span>
            <div className='itemButtons'>
                <input type='range' min={1} max={36} value={props.value} step={1} onChange={props.setTimeCallback}></input>
            </div>
        </div>
    )
}

export default ItemRange