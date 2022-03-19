import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import NewClient from "../pages/NewClient"
import EditClient from "../pages/EditClient"
import ViewClient from "../pages/ViewClient"
// import ErrorPage from "../pages/ErrorPage"

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clients' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='new' element={<NewClient />} />
          <Route path=':id' element={<ViewClient />} />
          <Route path='edit/:id' element={<EditClient />} />
        </Route>
        {/* <Route path='/*' element={<ErrorPage />} /> */}
      </Routes >
    </BrowserRouter>
  )
}

export default index