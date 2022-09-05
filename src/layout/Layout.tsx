import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const activeUrl = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-xl font-black text-white text-center'>CRM-Clientes</h2>
        <nav className='mt-5 flex justify-around md:mt-10 md:flex-col'>
          <NavLink className={`${activeUrl === '/' ? 'text-blue-300' : 'text-white'} text-xl block mt-2 hover:text-blue-300 transition-all`}
            to="/">Clientes</NavLink>
          <NavLink className={`${activeUrl === '/new' ? 'text-blue-300' : 'text-white'} text-xl block mt-2 hover:text-blue-300 transition-all`} to="/new">Nuevo cliente</NavLink>
        </nav>
      </div>
      <div className='md:w-3/4 p-10 h-screen md:overflow-y-scroll '>
        <Outlet />
      </div>

    </div >
  )
}

export default Layout