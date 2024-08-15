import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png'

import '../assets/styles/NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo"/>
      <ul>
        <li className='clickable'> <Link to="/"> HOME </Link> </li>
        <li> <a href='about.html'> ABOUT </a> </li>
        <li> <a href='menu.html'> MENU </a> </li>
        <li className='clickable'> <Link to="/booking"> RESERVATIONS </Link> </li>
        <li> <a href='order.html'> ORDER ONLINE </a> </li>
        <li> <a href='login.html'> LOGIN </a> </li>
      </ul>
    </nav>
)};

export default NavigationBar;
