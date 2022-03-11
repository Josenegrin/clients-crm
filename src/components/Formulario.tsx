import { Formik, Field, Form } from "formik"

const Formulario = () => {

  const handleSubmit = () => {
    console.log('Enviado')
  }

  const initialValues = {
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
  }

  return (
    <div className='mt-10 px-5 py-10 bg-white rounded-lg shadow-md w-3/4 mx-auto'>
      <h2 className='text-gray-600 font-bold textt-lg uppercase text-center'>Agregar Cliente</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className='mt-10'>
          <div className='mb-4'>
            <label className='text-gray-800' htmlFor='name'>Nombre:</label>
            <Field id='name' name='name' placeholder='Nombre del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='text' />
          </div>
          <div className='mb-4'>
            <label className='text-gray-800' htmlFor='company'>Empresa del cliente:</label>
            <Field id='company' name='company' placeholder='Empresa del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='text' />
          </div>
          <div className='mb-4'>
            <label className='text-gray-800' htmlFor='email'>E-mail:</label>
            <Field id='email' name='email' placeholder='E-mail' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='text' />
          </div>
          <div className='mb-4'>
            <label className='text-gray-800' htmlFor='phone'>Teléfono:</label>
            <Field id='phone' name='phone' placeholder='Teléfono del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='tel' />
          </div>
          <div className='mb-4'>
            <label className='text-gray-800' htmlFor='notes'>Notas:</label>
            <Field as='textarea' name='notes' id='notes' placeholder='Notas del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='tel' />
          </div>
          <input type='submit' value='Agregar Cliente' className='mt-5 w-full bg-blue-800 font-bold uppercase p-3 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-all' />
        </Form>
      </Formik>
    </div>
  )
}

export default Formulario