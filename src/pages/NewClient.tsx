import React from 'react'
import Form from '../components/Form'

const NewClient = () => {
  return (
    <>
      <h1 className='font-black text-xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena los siguientes campos para registar un cliente</p>
      <div>
        <Form />
      </div>
    </>
  )
}

export default NewClient