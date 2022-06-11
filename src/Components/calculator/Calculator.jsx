import { useState } from 'react'
import './calculator.css'
import { buttonData } from '../../data/data'

const Calculator = () => {
  const [bill, setBill] = useState(null)
  const [oldRate, setoldRate] = useState(null)
  const [peopleAmount, setPeopleAmount] = useState('')
  const [tipAmount, setTipAmount] = useState('0.00')
  const [total, setTotal] = useState('0.00')
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  const [isClicked5, setIsClicked5] = useState(false)
  const keys = [1, 2, 3, 4, 5, 6]

  const handleClick = (e) => {
    e.preventDefault()
    setoldRate(e.target.innerText)
  }

  const calculateTip = () => {
    let rate = parseInt(oldRate) / 100
    let newAmount = (bill / peopleAmount) * rate
    let newTotal = bill / peopleAmount + newAmount
    setTipAmount(newAmount.toFixed(2))
    setTotal(newTotal.toFixed(2))
  }

  const handleReset = () => {
    setTipAmount('0.00')
    setTotal('0.00')
    setPeopleAmount('')
    setoldRate(null)
    setBill('')
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">
          SPLI
          <br />
          TTER
        </h1>
        <div className="full-calculator">
          <div className="calculation">
            <div className="body">
              <div className="inner-container">
                <form action="">
                  <label htmlFor="">Bill</label>
                  <div className="input-field">
                    <p className="icon">$</p>
                    <input
                      value={bill}
                      type="text"
                      className="input"
                      onChange={(e) => {
                        setBill(e.target.value)
                      }}
                    />
                  </div>
                </form>
                <div className="options">
                  <form action="">
                    <label htmlFor="">Select Tip %</label>
                    <div className="buttons">
                      <button
                        key={keys[0]}
                        className={`optionButton Button ${isClicked1 ? 'active' : ''}`}
                        onClick={(e) => {
                          setIsClicked1(!isClicked1)
                          setIsClicked2(false)
                          setIsClicked3(false)
                          setIsClicked4(false)
                          setIsClicked5(false)
                          handleClick(e)
                        }}
                      >
                        5%
                      </button>
                      <button
                        className={`optionButton Button ${isClicked2 ? 'active' : ''}`}
                        onClick={(e) => {
                          setIsClicked2(!isClicked2)
                          setIsClicked1(false)
                          setIsClicked3(false)
                          setIsClicked4(false)
                          setIsClicked5(false)
                          handleClick(e)
                        }}
                      >
                        10%
                      </button>
                      <button
                        className={`optionButton Button ${isClicked3 ? 'active' : ''}`}
                        onClick={(e) => {
                          setIsClicked3(!isClicked3)
                          setIsClicked1(false)
                          setIsClicked2(false)
                          setIsClicked4(false)
                          setIsClicked5(false)
                          handleClick(e)
                        }}
                      >
                        15%
                      </button>
                      <button
                        className={`optionButton Button ${isClicked4 ? 'active' : ''}`}
                        onClick={(e) => {
                          setIsClicked4(!isClicked4)
                          setIsClicked1(false)
                          setIsClicked3(false)
                          setIsClicked2(false)
                          setIsClicked5(false)
                          handleClick(e)
                        }}
                      >
                        25%
                      </button>
                      <button
                        className={`optionButton Button ${isClicked5 ? 'active' : ''}`}
                        onClick={(e) => {
                          setIsClicked5(!isClicked5)
                          setIsClicked1(false)
                          setIsClicked3(false)
                          setIsClicked4(false)
                          setIsClicked2(false)
                          handleClick(e)
                        }}
                      >
                        50%
                      </button>
                      <input
                        type="text "
                        className="optionButton optionUnique"
                        placeholder="Custom"
                        onClick={() => {
                          setIsClicked5(false)
                          setIsClicked1(false)
                          setIsClicked3(false)
                          setIsClicked4(false)
                          setIsClicked2(false)
                        }}
                        onChange={(e) => {
                          setoldRate(e.target.value)
                        }}
                        maxLength={3}
                      />
                    </div>
                  </form>
                </div>
                <form action="">
                  <label htmlFor="">Number of People</label>
                  <div className="input-field">
                    <p className="icon">$</p>
                    <input
                      type="number"
                      className="input"
                      value={peopleAmount}
                      onChange={(e) => {
                        setPeopleAmount(e.target.value)
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="display inner-container">
            <div className="display-output">
              <div className="displayText">
                <h3 className="label">Tip Amount</h3>
                <p className="info">/ person</p>
              </div>
              <h1 className="value">${tipAmount}</h1>
            </div>
            <div className="display-output">
              <div className="displayText">
                <h3 className="label">Total</h3>
                <p className="info">/ person</p>
              </div>
              <h1 className="value">${total}</h1>
            </div>
            <div className="buttons lower">
              <button onClick={handleReset} className="displayBtn">
                RESET
              </button>
              <button className="displayBtn" onClick={calculateTip}>
                CALCULATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
