import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput'

class CardNumberHolder extends Component {
  static displayName = 'Credit card number formatting';

  state = {
    cardNumber: ''
  };

  handleChangeNumberInput = cardNumber => {
    this.setState({cardNumber});
  };

  render() {
    const {cardNumber} = this.state;

    return (
    <div>
      <CardNumberInput
        cardNumber={cardNumber}
        onChange={this.handleChangeNumberInput} />
    </div>
    );
  }
}

export default CardNumberHolder;
