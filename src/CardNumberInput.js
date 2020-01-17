import React, { Component } from 'react';

class CardNumberInput extends Component {

  handleChangeNumberFormatting = event => {
    const { onChange } = this.props;
    const newValue = event.target.value;
    onChange(newValue);
  };

  render() {
    const { cardNumber } = this.props;
    return (
      <div>
        <input value={cardNumber}
               onChange={this.handleChangeNumberFormatting}
               placeholder="Введите номер карты" />
      </div>
    );
  }
}

export default CardNumberInput;
