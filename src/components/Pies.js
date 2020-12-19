import React from 'react'
import Tachyons from 'tachyons'
import { pies } from '../components/Desserts'
import '../App.css'

const Pies = () => {
  const createPies = pies => {
    return Object.values(pies).map((pie, index) => (
      <article
        className='center mw9-m mw7-ns br3 hidden ba b--black-30 mv4'
        key={index}
      >
        <h1 className='f4 bgDarkTeal br3 br--top mv0 pv2 ph3 teal'>
          {pie.name}
        </h1>
        <div className='pa3 bt b--black-10 flex'>
          <img className='w-25' src={pie.imgWhole} alt={pie.name} />
          <span className='f5 f4-ns f6-m lh-copy measure pl2 pr2 white w-50'>
            {pie.desc}
          </span>
          <img className='w-25' src={pie.imgPiece} />
        </div>
      </article>
    ))
  }

  return (
    <div className='tj w-60-l w-90-m mw-100 center'>
      <h1 className='tc white'>Pies</h1>
      <p className='f3 white f4-m'>
        ​​All of our pies are 9" in size and serve 6 to 8 people.
      </p>
      <p className='f3 white f4-m'>
        Pick ups are from our Cook Street location from 10am to 2pm Wednesday to
        Sunday. Payment is pay on pick up.​
      </p>
      <p className='f3 white f4-m'>
        Payment is pay on pick up.​ We require 48 hours notice to order a pie.
      </p>
      <p className='f3 white f4-m'>
        To order please email melanie@empiredonuts.ca
      </p>
      <section className='cf w-100 pa2-ns'>{createPies(pies)}</section>
    </div>
  )
}

export default Pies
