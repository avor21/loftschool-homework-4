import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  componentDidMount() {
    React.Children.forEach(this.props.children, child => {
      console.log('name=', child.type.name);
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <nav>
          <ul className="component-list">
            {React.Children.map(children, child => (
              <li className="component-list__name">{child.type.name}</li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper" />
      </div>
    );
  }
}

export default Switcher;
