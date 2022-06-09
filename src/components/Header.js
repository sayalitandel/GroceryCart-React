import React from 'react';

export default function Header(props) {
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Grocery Shop</h1>
                </a>
            </div>
            <div>
                <a href = "#/cart">Cart</a> <a href = "#/sign-in">Sign in</a>
            </div>
        </header>

    );
}