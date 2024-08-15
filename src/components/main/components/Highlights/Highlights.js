import Button from '../../../elements/Button'
import Card from '../../../elements/Card'

import GreekSalad from '../../assets/images/dishes/greek salad.jpg'
import Bruchetta from '../../assets/images/dishes/bruchetta.jpg'
import LemonDessert from '../../assets/images/dishes/lemon dessert.jpg'

import '../../assets/styles/Highlights.css'

const Highlights = () => {
    return (
      <section className="highlights">
          <section className="header">
              <section className='heading'>
                <h1> Specials </h1>
              </section>
              <section className='button'>
                <Button text="Online Menu"/>
              </section>
          </section>
          <section className="cards">
            <Card
              image={GreekSalad}
              alt="Greek salad from Little Lemon Restaurant"
              title="Greek salad"
              price="$12.99"
              description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />

            <Card
              image={Bruchetta}
              alt="Bruchetta from Little Lemon Restaurant"
              title="Bruchetta"
              price="$5.99"
              description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            />

            <Card
              image={LemonDessert}
              alt="Lemon dessert from Little Lemon Restaurant"
              title="Lemon dessert"
              price="$5.00"
              description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined."
            />
          </section>
      </section>
  )};

export default Highlights;