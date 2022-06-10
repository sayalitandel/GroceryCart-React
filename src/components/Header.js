import React from 'react';

export default function Header(props) {
    const { countCartItems } = props;
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Grocery Shop</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart {''}
                    {countCartItems ? (
                        <button className='badge'>{countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>
                <a href="#/sign-in">Sign in</a>
            </div>
        </header>

    );
}