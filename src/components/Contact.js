import React from 'react'
import Tachyons from 'tachyons'
import '../App.css'

const Contact = () => {
  return (
    <div className='w-60-l w-80-m center'>
      <h1 className='tc white'>Contact</h1>
      <p className='tc f3 f4-m white'>View Street Location: 250-415-8105</p>
      <p className='tc f3 f4-m white'> Cook Street Location: 250-590-3865</p>
      <form className='measure center mb3'>
        <fieldset id='contact-form' className='ba b--transparent ph0 mh0 white'>
          <legend className='f4 fw6 ph0 mh0'>
            Have a question? Send us a message!
          </legend>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6' for='name'>
              Name
            </label>
            <input
              className='pa2 input-reset ba bgHoverTeal w-100'
              type='text'
              name='name'
              id='name'
              placeholder='Please enter your name.'
              required
            />
          </div>
          <div className='mv3'>
            <label className='db fw6 lh-copy f6' for='email'>
              Email
            </label>
            <input
              className='pa2 input-reset ba bgHoverTeal w-100'
              type='email'
              name='email'
              id='email'
              placeholder='Please enter your email.'
              required
            />
          </div>
          <div className='mv3'>
            <label className='db fw6 lh-copy f6' for='phone'>
              Phone Number
            </label>
            <input
              className='pa2 input-reset ba bgHoverTeal w-100'
              type='number'
              name='phone'
              id='phone'
              placeholder='Please enter your phone.'
            />
          </div>
          <div className='mv3'>
            <label className='db fw6 lh-copy f6' for='password'>
              Comments
            </label>
            <textarea
              className='pa2 input-reset ba bgHoverTeal w-100 textarea'
              name='textarea'
              id='textarea'
              placeholder='Please enter your comments or questions.'
              required
            />
          </div>
        </fieldset>
        <div className=''>
          <input
            className='b ph3 pv2 input-reset ba grow pointer f6 dib darkTeal'
            type='submit'
            value='Send'
          />
        </div>
      </form>
    </div>
  )
}

export default Contact
