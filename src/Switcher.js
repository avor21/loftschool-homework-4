import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedComponent: 0
  };

  componentDidMount() {
    React.Children.forEach(this.props.children, child => {
      console.log('name=', child.type.name);
    });
  }

  handleClickOnComponentName = event => {
    const newValue = event.target.getAttribute('data-id');
    this.setState({ selectedComponent: newValue });
  };

  render() {
    const { children } = this.props;
    const { selectedComponent } = this.state;

    return (
      <div>
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, index) => (
              <li
                className="component-list__name"
                data-id={index}
                onClick={this.handleClickOnComponentName}
              >
                {child.type.displayName}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">
          {React.Children.toArray(children)[selectedComponent]}
        </div>
      </div>
    );
  }
}

export default Switcher;
