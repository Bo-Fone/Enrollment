import React from 'react';

const CartHead = props => {
    return (
        <thead>
            <tr>
                <th className='border-0 bg-light'>
                    <div className='py-2 text-uppercase'>Events/Courses</div>
                </th>
                <th className='border-0 bg-light'>
                    <div className='py-2 text-uppercase'>Quantity</div>
                </th>
                <th className='border-0 bg-light'>
                    <div className='py-2 text-uppercase'>
                        <span className='badge badge-pill badge-info'>
                            Total: {props.totalItems}
                        </span>
                    </div>
                </th>
                <th className='border-0 bg-light'>
                    <button
                        className='btn btn-danger btn-small px-3 py-1 rounded-pill text-uppercase'
                        onClick={props.onReset}
                    >
                        Reset
                    </button>
                </th>
            </tr>
        </thead>
    );
};

export default CartHead;
