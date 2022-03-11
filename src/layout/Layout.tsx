import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const activeUrl = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-blue-900 px-5 py-10 sm:px-2 sm:py-5 '>
        <h2 className='text-xl font-black text-white text-center'>CRM-Clientes</h2>
        <nav className='mt-10 flex md:flex-col sm:mt-5  sm:justify-around'>
          <NavLink className={`${activeUrl === '/clients' ? 'text-blue-300' : 'text-white'} text-xl block mt-2 hover:text-blue-300 transition-all`}
            to="/clients">Client</NavLink>
          <NavLink className={`${activeUrl === '/clients/new' ? 'text-blue-300' : 'text-white'} text-xl block mt-2 hover:text-blue-300 transition-all`} to="/clients/new">New Clients</NavLink>
        </nav>
      </div>
      <div className='md:w-3/4 p-10 bg-gray-200 md:h-screen overflow-scroll'>
        <Outlet />
      </div>

    </div >
  )
}

export default Layout