import Button from './home/components/elements/Button'

import HeaderImage from '../assets/images/HeaderImage.jpg'

import '../assets/styles/Header.css';

const Header = () => {
  return (
    <header>
        <article>
          <h1> Little Lemon </h1>
          <h2> Chicago </h2>
          <p> We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
          <Button text='Reserve a table' />
        </article>
        <img src={HeaderImage} alt='Cook with a food' />
    </header>
)};

export default Header