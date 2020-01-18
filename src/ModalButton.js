import React, {Component} from 'react';
import Modal from "./Modal";
import './ModalButton.css';

class ModalButton extends Component {
  static displayName = 'Modal window';

  state = {
    isModalShow: false
  };

  render() {
    const { isModalShow } = this.state;
    const modal = isModalShow
      && <Modal className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h2>Modal Window</h2>
            <button onClick={this.hideModal}>Close</button>
          </div>
        </div>
         </Modal>;

    return (
      <div>
        <button onClick={this.showModal}>Click me!</button>
        { modal }
      </div>
    );
  }

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };
}

export default ModalButton;
