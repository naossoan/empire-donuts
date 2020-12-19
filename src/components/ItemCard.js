import React from 'react'
import Tachyons from 'tachyons'
import { cakes, donuts, pies } from './Desserts'
import '../index.css'

const ItemCard = () => {
  return (
    <div className='br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center flex'>
      {/*  */}
      <div className='pa2 ph3-ns pb3-ns bg-white'>
        <div className='dt w-100 mt1'>
          <div className='dtc'>
            <h1 className='f5 f4-ns mv0'>{cakes.tiramisu.name}</h1>
          </div>
        </div>
        <p className='lh-copy measure mt2 mid-gray pt4-ns'>
          {cakes.tiramisu.desc}
        </p>
      </div>
      <img
        src={cakes.tiramisu.img}
        alt={cakes.tiramisu.name}
        className='db w-100 br2 br--top'
        width='200px'
        height='auto'
      />
    </div>
  )
}

export default ItemCard
