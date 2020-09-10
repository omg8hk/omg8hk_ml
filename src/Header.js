import React from 'react';
class Header extends React.Component{
    render() {
        return (
            <header id="header" className="alt">
				<div className="logo"><a href="/">OMG8HK <span>for OHMYGIRL</span></a></div>
				<a href="#menu">Menu</a>
			</header>
        );
    }
}

export default Header;