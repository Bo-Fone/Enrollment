import React, { Component } from 'react';
import CartItem from './CartItem';

class CartBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.events.map(event => {
                    return (
                        <CartItem
                            key={event.id}
                            event={event}
                            onRemove={this.props.onRemove}
                            onIncrement={this.props.onIncrement}
                        />
                    );
                })}
            </tbody>
        );
    }
}

export default CartBody;
