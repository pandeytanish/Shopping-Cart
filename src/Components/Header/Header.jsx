import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
    const handleLoginClick = () => {
        // Handle login button click
        console.log('Login button clicked');
    };

    const handleAddToCartClick = () => {
        // Handle add to cart button click
        console.log('Add to cart button clicked');
    };

    const handleFavouriteClick = () => {
        // Handle favourite button click
        console.log('Favourite button clicked');
    };

    return (
        <header className="header">
            <div className="logo">
                {/* Replace the 'logo.png' with your logo image file */}
                <img src="/path/to/logo.png" alt="Logo" />
            </div>
            <div className="nav-buttons">
                <button onClick={handleLoginClick} className="login-button">Login</button>
                <button onClick={handleAddToCartClick} className="add-to-cart-button">Add to Cart</button>
                <button onClick={handleFavouriteClick} className="favourite-button">Favourite</button>
            </div>
        </header>
    );
};

export default Header;
