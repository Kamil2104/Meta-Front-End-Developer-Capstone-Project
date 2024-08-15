import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png'

import '../assets/styles/NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo"/>
      <ul>
        <li> <Link to="/" className='clickable'> HOME </Link> </li>
        <li> ABOUT </li>
        <li> MENU </li>
        <li> <Link to="/booking" className='clickable'> RESERVATIONS </Link> </li>
        <li> ORDER ONLINE </li>
        <li> LOGIN </li>
      </ul>
    </nav>
)};

export default NavigationBar;
