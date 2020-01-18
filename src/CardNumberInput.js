import React, { Component } from 'react';

class CardNumberInput extends Component {

  state = {
    formattedNumber: this.props.cardNumber
  };

  handleChangeNumberFormatting = event => {
    const { onChange } = this.props;
    const newValue = event.target.value.replace(/ /g, '');
    onChange(newValue);

    this.formatCardNumber(newValue);

  };

  formatCardNumber = number => {
    const matches = number.match(/.{1,4}/g);
    const formattedNumber = matches && matches.join(' ');
    console.log(formattedNumber);
    this.setState({ formattedNumber })
  };

  render() {
    const { formattedNumber } = this.state;

    return (
      <div>
        <input value={formattedNumber}
               onChange={this.handleChangeNumberFormatting}
               placeholder="Введите номер карты" />
      </div>
    );
  }
}

export default CardNumberInput;
