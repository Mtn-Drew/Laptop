import React from 'react'
import Total from './Total'

const SummaryOption = props => (
  <div>
    <section className="main__summary">
      <h2>Your cart</h2>
      <div>{props.summary}</div>
    </section>
    <Total 
    total={props.total}
    USCurrencyFormat={props.USCurrencyFormat} 
    />
  </div>  
)

export default SummaryOption