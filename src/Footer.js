import React from 'react';
class Footer extends React.Component{
    render() {
        return (
            <footer id="footer">
				<div className="container">
					<ul className="icons">
						<li><a href="https://twitter.com/omg8_hk" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="https://www.facebook.com/omg8hk/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="https://www.instagram.com/omg8_hk/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
					</ul>
				</div>
				<div className="copyright">
                    HK Miracle Whatsapp Group 請DM我們加入<br/>
					OMG8HK &copy; Untitled. All rights reserved.
				</div>
			</footer>
        );
    }
}

export default Footer;