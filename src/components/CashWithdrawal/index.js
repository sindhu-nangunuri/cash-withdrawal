// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balanceAmount: 2000,
  }

  onDecrementAmount = value => {
    this.setState(prevState => {
      console.log(`previous State Value ${prevState.balanceAmount}`)
      return {
        balanceAmount: prevState.balanceAmount - value,
      }
    })
  }

  render() {
    const {denominationsList} = this.props
    const {balanceAmount} = this.state
    return (
      <div className="bg-container">
        <div className="balance-card-container">
          <div className="name-container">
            <h1 className="name-letter">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="balance-amount">
              <p className="amount">{balanceAmount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div className="button-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
