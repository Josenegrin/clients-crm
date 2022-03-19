import { Formik, Field, Form } from "formik"
import FormAlert from "./FormAlert"
import { validationClientSchema } from "../utils/validationForm"
import { sendClient } from "../utils/requestForms"
import { useNavigate } from "react-router-dom"
import Loader from './Loader'
interface Props {
  client: {
    name: string,
    company: string,
    email: string,
    phone: string,
    notes: string,
    id: number,
  },
  loading: boolean,
}
const Formulario = ({ client, loading }: Props) => {
  const navigate = useNavigate()

  const initialValues = {
    id: client?.id ?? '',
    name: client?.name ?? '',
    company: client?.company ?? '',
    email: client?.email ?? '',
    phone: client?.phone ?? '',
    notes: client?.notes ?? '',
  }

  const handleSubmit = (values: any) => {
    sendClient(values)
    navigate('/clients')
  }



  return (
    loading ? <Loader /> :
      <div className='mt-10 px-5 py-10 bg-white rounded-lg shadow-md w-3/4 mx-auto'>
        <h2 className='text-gray-600 font-bold textt-lg uppercase text-center'>{client?.name ? 'Editar Cliente' : 'Agregar Cliente'}</h2>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values)
            resetForm()
          }}
          validationSchema={validationClientSchema}
        >
          {(data) => {
            const { errors, touched } = data
            return (



              <Form className='mt-10'>
                <div className='mb-4'>
                  <label className='text-gray-800' htmlFor='name'>Nombre:</label>
                  <Field id='name' name='name' placeholder='Nombre del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='text' />
                  {errors.name && touched.name && (
                    <FormAlert>
                      {errors.name}
                    </FormAlert>
                  )}
                </div>
                <div className='mb-4'>
                  <label className='text-gray-800' htmlFor='company'>Empresa del cliente:</label>
                  <Field id='company' name='company' placeholder='Empresa del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='text' />
                  {errors.company && touched.company && (
                    <FormAlert>
                      {errors.company}
                    </FormAlert>
                  )}
                </div>
                <div className='mb-4'>
                  <label className='text-gray-800' htmlFor='email'>E-mail:</label>
                  <Field id='email' name='email' placeholder='E-mail' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='text' />
                  {errors.email && touched.email && (
                    <FormAlert>
                      {errors.email}
                    </FormAlert>
                  )}              </div>
                <div className='mb-4'>
                  <label className='text-gray-800' htmlFor='phone'>Teléfono:</label>
                  <Field id='phone' name='phone' placeholder='Teléfono del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='tel' />
                  {errors.phone && touched.phone && (
                    <FormAlert>
                      {errors.phone}
                    </FormAlert>
                  )}
                </div>
                <div className='mb-4'>
                  <label className='text-gray-800' htmlFor='notes'>Notas:</label>
                  <Field as='textarea' name='notes' id='notes' placeholder='Notas del cliente' className='mt-2 block w-full p-3 bg-gray-200 rounded-md' type='tel' />
                  {errors.notes && touched.notes && (
                    <FormAlert>
                      {errors.notes}
                    </FormAlert>
                  )}
                </div>
                <input type='submit' value={client?.name ? 'Editar Cliente' : 'Agregar Cliente'} className='mt-5 w-full bg-blue-800 font-bold uppercase p-3 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-all' />
              </Form>
            )
          }}
        </Formik>
      </div>
  )
}

Formulario.defaultProps = {
  client: null,
}
export default Formulario