import React from 'react'
import './styles.css'
import SimulatorProductItem from '../simulatorProductItem'
import { useState, useEffect } from 'react'

const SimulatorProductList = (props) => {

    const [selected, setSelected] = useState(0);
    const clickHandler = (id) => {
        setSelected(id)
    }
    const [items, setItems] = useState([
        {
            id:0,
            onClick: () => {clickHandler(0)},
            for:"simulator_product1",
            data:"Tesouro Prefixado",
            selected: true
        },
        {
            id:1,
            onClick: () => {clickHandler(1)},
            for:"simulator_product2",
            data:"Tesouro Selic",
            selected: false
        },
            
        {
            id:2,
            onClick: () => {clickHandler(2)},
            for:"simulator_product3",
            data:"Tesouro IPCA+",
            selected: false
        },
            
        {
            id:3,
            onClick: () => {clickHandler(3)},
            for:"simulator_product4",
            data:"CDB e LC",
            selected: false
        },
            
        {
            id:4,
            onClick: () => {clickHandler(4)},
            for:"simulator_product5",
            data:"LCI e LCA",
            selected: false
        },
    ])

    useEffect(() => {
        const i = items.map(item => {
            item.selected = false
            if(item.id === selected){
                item.selected = true;
                props.setInvestmentCallback(item.data)
            }
            return item
        })
        setItems(i)
    }, [selected])

    return (
        <div id="simulator-product-list">
            {
                items.map(item => {
                return (
                    <SimulatorProductItem   id={item.id}
                                            onClick={item.onClick}
                                            for={item.for}
                                            data={item.data}
                                            selected={item.selected}/>
                )})
            }
        </div>
    )
}

export default SimulatorProductList