import React from 'react'
import Tachyons from 'tachyons'
import { donuts } from '../components/Desserts'
import '../App.css'

const Donuts = () => {
  const createDonut = donuts => {
    let donutList = []
    for (let i = 0; i < donuts.length; i++) {
      donutList.push(
        <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
          <div className='aspect-ratio aspect-ratio--1x1'>
            <img
              src={donuts[i]}
              className='cover bg-center aspect-ratio--object'
            ></img>
          </div>
        </div>
      )
    }
    return donutList
  }

  return (
    <div className='tj w-60-l w-80-m mw-100 center'>
      <article className='cf pa3 mw9 center'>
        <h1 className='tc white'>Donuts</h1>
        <p className='f3 white f4-m'>
          Enjoy our wide variety of delicious donuts made fresh daily!
        </p>
        <p className='white f3 f4-m'>Order online with the button above.</p>
        <p className='white f3 f4-m'>
          Deliveries operate Wednesday to Sunday 9am until 12pm. When you input
          your time for delivery it must be within this time frame.
        </p>

        <section className='fl w-100'>
          {createDonut(donuts)}
          {/* <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_01.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_02.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_03.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_04.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_05.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_06.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_07.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_08.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_09.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_10.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div>
          <div className='fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l'>
            <div className='aspect-ratio aspect-ratio--3x4'>
              <span
                style={{
                  backgroundImage: 'url("./img/donut_11.jpg")',
                }}
                className='cover bg-center aspect-ratio--object'
              ></span>
            </div>
          </div> */}
        </section>
      </article>
    </div>
  )
}

export default Donuts
