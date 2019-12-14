import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
    render() {
        return (
            <tr>
                <th className='text-secondary'>{this.props.event.title}</th>
                <td>
                    <span className={this.setBadgeClasses()}>
                        {this.formatCt()}
                    </span>
                </td>
                <td>
                    <button
                        onClick={() => this.props.onIncrement(this.props.event)}
                        className='btn btn-info btn-sm m-2 rounded-pill'
                    >
                        Enroll
                    </button>
                </td>
                <td>
                    <button
                        onClick={() => this.props.onRemove(this.props.event.id)}
                        className='btn btn-warning btn-sm m-2 rounded-pill'
                    >
                        Remove
                    </button>
                </td>
            </tr>
        );
    }

    setBadgeClasses() {
        let badgeclasses = 'badge m-2 ';
        badgeclasses +=
            this.props.event.value === 0
                ? 'badge-danger'
                : 'badge-info badge-pill';
        return badgeclasses;
    }

    formatCt() {
        const { value } = this.props.event;
        return value === 0 ? 'Zero' : value;
    }
}

export default CartItem;
