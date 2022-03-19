export const clientsUrl: string = import.meta.env.VITE_API_URL! as string

export const getClients = async () => {
  try {
    const req = await fetch(clientsUrl)
    const res = await req.json()
  } catch (error) {
    console.log(error)
  }
}

export const sendClient = async (values: any)=>  {

  const url = values?.id ? `${clientsUrl}/${values?.id}` : clientsUrl
  try {
    const req = await fetch(url, {
      method: values.id ? 'PATCH' : 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json()
  } catch(error) {
    console.log(error)
  }
}

export const deleteClient = async (id: number) =>  {
  const url = `${clientsUrl}/${id}`
  try {

    const req = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json()
  } catch(error) {
    console.log(error)
  }
}

