import React from 'react'
import SummaryOption from './SummaryOption'

class Summary extends React.Component {
  
  render() {

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

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
      <SummaryOption 
        summary={summary}  
        USCurrencyFormat={this.props.USCurrencyFormat} 
        // total={this.props.total}
        total={total}
        />
    </div>
  )}
}

export default Summary