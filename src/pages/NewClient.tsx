import Formulario from '../components/Formulario'

const NewClient = () => {
  return (
    <>
      <h1 className='font-black text-xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena los siguientes campos para registar un cliente</p>
      <div>
        <Formulario />
      </div>
    </>
  )
}

export default NewClient