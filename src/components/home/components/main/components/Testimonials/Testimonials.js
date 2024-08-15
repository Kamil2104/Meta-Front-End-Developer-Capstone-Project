import Review from "../../../elements/Review";

import Person1 from '../../assets/images/customers/Person1.jpeg'
import Person2 from '../../assets/images/customers/Person2.jpeg'
import Person3 from '../../assets/images/customers/Person3.jpg'
import Person4 from '../../assets/images/customers/Person4.jpeg'

import '../../assets/styles/Testimonials.css'

const Testimonials = () => {
    return (
      <section className="testimonials">
          <section className="header">
            <h1> Testimonials </h1>
          </section>
          <section className="reviews">
            <Review
              clientPhoto={Person1}
              clientName="Emma Thompson"
              clientRating="5/5"
              clientReview="It's the best restaurant in the neighborhood! Food is delicious and prices are not high. I recommend this place very much!"
            />

            <Review
              clientPhoto={Person2}
              clientName="Ethan Whitmore"
              clientRating="5/5"
              clientReview="I was very happy to see that Little Lemon Restaurant added the feature of booking the table. There is not many places having it!"
            />

            <Review
              clientPhoto={Person3}
              clientName="Emily Harper"
              clientRating="5/5"
              clientReview="The service is very nice and helpful, I come here often and I have never been disappointed! It's so good to have a place like that nearby."
            />

            <Review
              clientPhoto={Person4}
              clientName="Sophia Caldwell"
              clientRating="5/5"
              clientReview="You have everything here! Appetizers, lunch dishes, desserts, pizzas and many other great dishes, you will always find here something for yourself."
            />
          </section>
      </section>
  )};

export default Testimonials;