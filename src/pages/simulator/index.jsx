import React from 'react'
import './styles.css'
import SimulatorProductList from '../../components/simulatorProductList';
import MoneyInput from '../../components/moneyInput';
import ItemRange from '../../components/itemRange';
import { useState, useEffect } from 'react'

const TESOURO_PREFIXADO = (10.63 / 12).toFixed(2);
const TESOURO_SELIC = (13.75 / 12).toFixed(2);
const TESOURO_IPCA = (3.12 / 12).toFixed(2);
const CDB_LC = (12.39 / 12).toFixed(2);
const LCI_LCA = (20/12).toFixed(2);

function performance(initialValue, support, rate, length) {
  const monthly = rate / 100;
  const finalValue = initialValue * Math.pow(1 + monthly, length) + support * ((Math.pow(1 + monthly, length) - 1) / monthly);
  return finalValue;
}

const Simulator = () => {

  const [investment, setInvestment] = useState("Tesouro Prefixado")
  const [initialValue, setInitialValue] = useState(5250.00)
  const [support, setSupport] = useState(300.00)
  const [length, setLength] = useState(24)
  const [totalValue, setTotalValue] = useState(0)



  const setInvestmentCallback = (i) => {
    setInvestment(i);
  }
  const setInitialValueCallback = (i) => {
    setInitialValue(Number.parseFloat(i.target.value));
  }
  const setSupportCallback = (i) => {
    setSupport(Number.parseFloat(i.target.value));
  }
  const setLengthCallback = (i) => {
    setLength(Number.parseInt(i.target.value));
  }
  
  useEffect(()=> {
    let rate = 0;
    switch(investment) {
      default:
      case "Tesouro Prefixado":
        rate = TESOURO_PREFIXADO;
        break;
      case "Tesouro Selic":
        rate = TESOURO_SELIC;
        break;
      case "Tesouro IPCA+":
        rate = TESOURO_IPCA;
        break;
      case "CDB e LC":
        rate = CDB_LC;
        break;
      case "LCI e LCA":
        rate = LCI_LCA;
        break;
    }
    setTotalValue(performance(initialValue, support, rate, length))
  }, [investment, support, initialValue, length])

    return (
      <>
        <div className='simulator'>
          <div id='header'>
            <div>
                <h2>Simule agora</h2>
                <p>Faça uma comparação e comece a investir em uma experiência fácil e intuitiva:</p>
            </div>
            <div className='simulatorList'>
                <SimulatorProductList setInvestmentCallback={setInvestmentCallback}/>
            </div>
          </div>
          <div className='simulatorBody'>
            <div>
                <div className='simulatorValues'>
                  <h3>Para começar, qual valor você gostaria de investir?</h3>
                  <MoneyInput 
                    setValueCallback={setInitialValueCallback}
                    value={initialValue.toFixed(2)}
                    placeholder="5250,00"
                  />
                  <h3>E por mês, quanto gostaria de depositar?</h3>
                  <MoneyInput
                    setValueCallback={setSupportCallback}
                    value={support.toFixed(2)}
                    placeholder="300,00"
                  />
                  <h3>Quanto tempo deixaria seu dinheiro investido?</h3>
                  <ItemRange
                    setTimeCallback={setLengthCallback}
                    value={length}
                  />
                </div>
            </div>
            <div className='results'>
                <h3>Em {length} meses você teria</h3>
                <h1>R$ {totalValue.toFixed(2)}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Simulator;