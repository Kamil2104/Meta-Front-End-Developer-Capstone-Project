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
              <a href='home.html'> Home </a>
              <a href='about.html'> About </a>
              <a href='menu.html'> Menu </a>
              <a href='reservations.html'> Reservations </a>
              <a href='order.html'> Order Online </a>
              <a href='login.html'> Login </a>
            </section>
          </section>
          <section className="contact">
            <header>
              <h3> Contact </h3>
            </header>
            <section className="links">
              <a href='address.html'> Address </a>
              <a href='phone.html'> Phone number </a>
              <a href='email.html'> Email </a>
            </section>
          </section>
          <section className="socialMediaLinks">
            <header>
              <h3> Social Media Links </h3>
            </header>
            <section className="links">
              <a href='address.html'> Address </a>
              <a href='phone.html'> Phone number </a>
              <a href='email.html'> Email </a>
            </section>
          </section>
        </section>
    </footer>
)};

export default Footer;
