import React from 'react'
import Tachyons from 'tachyons'
import { cakes } from '../components/Desserts'
import '../App.css'

const Cakes = () => {
  const createCake = cakes => {
    return Object.values(cakes).map((cake, index) => (
      <article
        className='center mw9-m mw7-ns br3 hidden ba b--black-30 mv4'
        key={index}
      >
        <h1 className='f4 bgDarkTeal br3 br--top mv0 pv2 ph3 teal'>
          {cake.name}
        </h1>
        <div className='pa3 bt b--black-10 flex'>
          <img className='w-40' src={cake.img} />
          <span className='f5 f4-ns f5-m lh-copy measure pl2 white'>
            {cake.desc}
          </span>
        </div>
      </article>
    ))
  }

  return (
    <div className='tj w-60-l w-80-m mw-100 center'>
      <h1 className='tc white'>Cakes</h1>
      <p className='f3 white f4-m'>
        All cakes are priced at $60, 8" in size, and serve 8 to 12 people.
      </p>
      <p className='f3 white f4-m'>
        Pick ups are from our Cook Street location from 10am to 2pm Wednesday to
        Sunday.
      </p>
      <p className='f3 white f4-m'>
        Payment is pay on pick up.​ We require 48 hours notice to order a cake.
      </p>
      <p className='f3 white f4-m'>
        To order please email melanie@empiredonuts.ca.
      </p>
      <section className='cf w-100 pa2-ns'>{createCake(cakes)}</section>
    </div>
  )
}

export default Cakes
