import React from "react";
import logo from "./arqueriapro_logo_mono.svg";
//import { Link } from "gatsby";

// const navigation = [
//     { title: 'About', page: '/about/'},
//     { title: 'Contact', page: '/contact/'},
// ];

const Header = (props) => {
    return (
        <header>
            <img src={logo} width="200" alt="Arqueria.pro logo" />
            <nav>
                <ul>
                    {
                        null
                        /*navigation.map((item) => {
                            return <li><Link to={item.page}>{item.title}</Link></li>;
                        })*/
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;
