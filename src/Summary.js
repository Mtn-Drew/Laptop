import React from 'react'
import Total from './Total'

class Summary extends React.Component {
  render() {
  const summary = Object.keys(this.props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {this.props.USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

return (
  <div>
  <section className="main__summary">
    <h2>Your cart</h2>
    <div>{summary}</div>
  </section>
  <Total 
  total={this.props.total}
  USCurrencyFormat={this.props.USCurrencyFormat} 
  />
  </div>
)
}}

export default Summary