import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Loader from '../components/Loader'
import { clientsUrl } from '../utils/requestForms'

const ViewClient = () => {
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

  return loading ? (
    <Loader />
  ) : Object?.keys(client)?.length === 0 ? (
    <p>No Hay Resultados </p>
  ) : (
    <div>
      <h1 className='font-black text-xl text-blue-900'>Ver Cliente: {client?.name}</h1>
      <p className='mt-3'>Información del cliente</p>
      <p className='text-xl mt-10 text-gray-700'><span className='uppercase font-bold text-gray-800'>Cliente: </span>{client?.name}</p>
      {client?.company && <p className='text-xl mt-4 text-gray-700'><span className='uppercase font-bold text-gray-800'>Empresa: </span>{client?.company}</p>}
      {client?.email && <p className='text-xl mt-4 text-gray-700'><span className='uppercase font-bold text-gray-800'>Email: </span>{client?.email}</p>}
      {client?.phone && <p className='text-xl mt-4 text-gray-700'><span className='uppercase font-bold text-gray-800'>Teléfono: </span>{client?.phone}</p>}
      {client?.notes && <p className='text-xl mt-4 text-gray-700'><span className='uppercase font-bold text-gray-800'>Notas: </span>{client?.notes}</p>}
    </div>
  )
}

export default ViewClient