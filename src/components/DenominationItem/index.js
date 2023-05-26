// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onDecrementAmount} = props
  const {value} = denominationDetails
  const onDecrement = () => {
    onDecrementAmount(value)
  }
  return (
    <button className="button button1" type="button" onClick={onDecrement}>
      {value}
    </button>
  )
}

export default DenominationItem
