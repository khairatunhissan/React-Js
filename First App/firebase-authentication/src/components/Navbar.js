import {NavLink} from 'react-router-dom'
function Navbar() {
    //Link can't do style so use navNavLink
    return ( 
        <nav>
            <ul>
                <li>
                    
                    <NavLink 
                    exact
                    to="/" 
                    activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                        }}>
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact 
                    to="/about"
                    activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                        }}>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/services"activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>Services</NavLink>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;