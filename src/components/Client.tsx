import { useNavigate } from 'react-router-dom'

interface Props {
  client: {
    name: string,
    company: string,
    email: string,
    phone: string,
    notes: string,
    id: number,
  },
  handleDelete: Function,
}

const Client = ({ client, handleDelete }: Props) => {
  const { name, company, email, phone, id } = client
  const navigate = useNavigate()

  return (
    <tr key={id} className='border-b transition-all hover:bg-gray-50'>
      <td className='p-3'>{name}</td>
      <td className='p-3'>{company}</td>
      <td className='p-3'>
        <p><span className='text-gray-800 uppercase font-bold'>Email:</span> {email}</p>
        <p><span className='text-gray-800 uppercase font-bold'>Teléfono:</span> {phone} </p>
      </td>
      <td className='p-3 flex flex-col'>
        <button type='button' onClick={() => navigate(`/clients/${id}`)} className='mt-2 px-2 py-1 bg-blue-600 rounded-md transition-all text-white hover:bg-blue-500'>Ver</button>
        <button type='button' onClick={() => navigate(`/clients/edit/${id}`)} className='mt-2 px-2 py-1 bg-green-600 rounded-md transition-all text-white hover:bg-green-500'>Editar</button>
        <button type='button' onClick={() => handleDelete(id)} className='mt-2 px-2 py-1 bg-red-600 rounded-md transition-all text-white hover:bg-red-500'>Eliminar</button>
      </td>
    </tr>
  )
}

export default Client