import React from 'react'
import Tachyons from 'tachyons'

const Nav = ({ setRoute }) => {
  return (
    <nav class=''>
      <div class='tc mb3 bg-white'>
        <img src='./img/empire_logo.jpg' />
      </div>

      <div class='tc pb3'>
        <a
          class='f3 f5-m link dim br3 ba bw1 ph3 pv2 mb2 mr2 dib white pointer'
          onClick={() => setRoute('home')}
        >
          Home
        </a>
        <a
          class='f3 f5-m link dim br3 ba bw1 ph3 pv2 mb2 mr2 dib white pointer'
          onClick={() => setRoute('donuts')}
        >
          Donuts
        </a>
        <a
          class='f3 f5-m link dim br3 ba bw1 ph3 pv2 mb2 mr2 dib white pointer'
          onClick={() => setRoute('cakes')}
        >
          Cakes
        </a>
        <a
          class='f3 f5-m link dim br3 ba bw1 ph3 pv2 mb2 mr2 dib white pointer'
          onClick={() => setRoute('pies')}
        >
          Pies
        </a>
        <a
          class='f3 f5-m link dim br3 ba bw1 ph3 pv2 mb2 dib white pointer'
          onClick={() => setRoute('contact')}
        >
          Contact
        </a>
        <div class='ph3'>
          <a
            class='f2 link dim br3 ph3 pv2 mb2 dib white bgTeal'
            href='https://empiredonuts.moduurn.com/'
            target='_blank'
          >
            Order Online!
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
