import React from 'react'
import './styles.css'

const SimulatorProductItem = (props) => {
    function clickHandler(callback) {
        callback()
    }

    const style = {
        borderColor: props.selected ? "#9B1536" : "#D8D8D8",
        fontWeight: props.selected ? "bold" : "normal"
    }
    return (
        <div className='simulatorProductItem' id={props.id} onClick={() => {clickHandler(props.onClick)}} style={style}>
            <input type='radio' id={props.id} onClick={props.onClick}/>
            <h3 className='simulatorProductOption'>
                <label for={props.for} className='simulatorProductOption_' data-dropcaption={props.data} style={style}>
                    {props.data}
                </label>
            </h3>
        </div>
    )
}

export default SimulatorProductItem