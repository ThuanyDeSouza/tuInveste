import React from 'react'
import './styles.css'

const MoneyInput = (props) => {

    return (
        <div className='moneyInput'>
            <span className='value'>
                <span>R$</span>
                <input className='textMoneyInput' value={props.value} placeholder={props.placeholder} onChange={props.setValueCallback}></input>
            </span>
        </div>
    )
}

export default MoneyInput