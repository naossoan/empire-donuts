import React from 'react'
import Tachyons from 'tachyons'

const Home = () => {
  return (
    <div>
      <div className='tj w-60-l w-80-m center'>
        <h1 className='white tc'>​Hey Donut Lovers!</h1>

        <p className='white f3 f4-m'>
          230 Cook Street location hours: Wednesday to Sunday 9am - sold out.
        </p>
        <p className='white f3 f4-m'>
          736 View Street location hours: <br />
          <br />
          Wednesday to Friday 8am - sold out.
          <br />
          Saturdays 9am - sold out.
        </p>
        <p className='white f3 f4-m'>
          FREE delivery within 4 Km of Cook St location, delivery available
          within 8 Km with delivery fee.
        </p>

        <p className='white f3 f4-m'>
          Unfortunately we will not be taking orders over the phone and we will
          not be offering pre-order pick-ups in store.
        </p>
        <p className='white f3 f4-m'>
          Deliveries operate Wednesday to Sunday 9am until 12pm. When you input
          your time for delivery it must be within this time frame.
        </p>
        <p className='white f3 f4-m'>
          When you order donuts, you will now be able to choose the flavour for
          each donut in your box! ​
        </p>
        <p className='white f3 f4-m'>
          Completely contactless delivery and prepayments.
        </p>
        <p className='white f3 f4-m'>
          Our kitchen and limited staff are adhering to the utmost sanitizing
          standards laid out by the health authorities.
        </p>
      </div>
      <div id='robot' className='center w-40-l w-75-m dt mb3'>
        <img className='w-50' src='./img/empire_robot.jpg' />
        <span className='white f3 w-50 f4-m pl3'>
          All donuts are made by hand from scratch, with quality ingredients.
        </span>
      </div>
    </div>
  )
}

export default Home
