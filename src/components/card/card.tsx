import { Component, type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div id="card">
        {this.props.children}
      </div>
    );
  }
}

export default Card;