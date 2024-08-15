import { Link } from 'react-router-dom';
import FooterLogo from '../assets/images/FooterLogo.jpg'

import '../assets/styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <section className="logo">
          <img src={FooterLogo} alt="Little Lemon Logo"/>
        </section>
        <section className='footerNavigation'>
          <section className="doormatNavigation">
            <header>
              <h3> Doormat <br /> Navigation </h3>
            </header>
            <section className="links">
              <Link to="/" className='clickable'> Home </Link>
              <p> About </p>
              <p> Menu </p>
              <Link to="/booking" className='clickable'> Reservations </Link>
              <p> Order Online </p>
              <p> Login </p>
            </section>
          </section>
          <section className="contact">
            <header>
              <h3> Contact </h3>
            </header>
            <section className="links">
              <p> Address </p>
              <p> Phone number </p>
              <p> Email </p>
            </section>
          </section>
          <section className="socialMediaLinks">
            <header>
              <h3> Social Media Links </h3>
            </header>
            <section className="links">
              <p> Address </p>
              <p> Phone number </p>
              <p> Email </p>
            </section>
          </section>
        </section>
    </footer>
)};

export default Footer;
