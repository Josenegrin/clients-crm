import { useState, useEffect } from "react"
import Client from "../components/Client"
import { deleteClient } from "../utils/requestForms"

const Home = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const getClient = async () => {
      try {
        const req = await fetch('http://localhost:4000/clients')
        const res = await req.json()
        if (res) setClients(res)
      } catch (error) {
        console.log(error)
      }
    }
    getClient()
  }, [])

  const handleDelete = (id: number) => {

    deleteClient(id)

    const filteringClients = clients.filter((client) => client.id !== id)
    setClients(filteringClients)
  }
  return (
    <section>
      <h2 className='font-black text-xl text-blue-900'>Listado de Clientes</h2>
      <p className='mt-3'>Administra tus clientes</p>
      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Contacto</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients?.length > 0 && clients.map((client, index) => <Client key={index} client={client} handleDelete={handleDelete} />)}
        </tbody>
      </table>

    </section>
  )
}

export default Home