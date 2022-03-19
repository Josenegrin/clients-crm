import { useState, useEffect } from 'react'
import Formulario from '../components/Formulario'
import { useParams } from 'react-router-dom'
import FormAlert from '../components/FormAlert'
import { clientsUrl } from '../utils/requestForms'
const EditClient = () => {
  const [client, setClient] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const { id } = useParams()

  useEffect(() => {
    const getClient = async () => {
      try {
        const req = await fetch(`${clientsUrl}/${id}`)
        const res = await req.json()
        setClient(res)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getClient()
  }, [])

  return (
    <>
      <h1 className='font-black text-xl text-blue-900'>Editar Cliente</h1>
      {client?.name ?
        <>
          <p className='mt-3'>Llena los siguientes campos para registar un cliente</p>
          <div>
            <Formulario client={client} loading={loading} />
          </div>
        </>
        : <div className='mt-5'><FormAlert>Cliente no válido</FormAlert></div>

      }
    </>
  )
}

export default EditClient