
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Header from './Pages/Header'
import Products from './Pages/Product'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About-us'
import Blogs from './Pages/Blogs'
import Docs from './Pages/Docs'
import Privacyploice from './Pages/PrivacyPolice'
import TermsService from './Pages/TermsService'
import ProductSass from './Pages/ProductSass'
import ProductSubSaas from './Pages/ProductSubSaas'
const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  },
  {
    path:"/Product",
    element:
    <div>
      <Header></Header>
    <Products></Products>
    </div>
  },

  {
    path:"/contact",
    element:
    <div>
      <Header></Header>
    <Contact></Contact>
    </div>
  },
{
    path:"/About",
    element:
    <div>
      <Header></Header>
    <About></About>
    </div>
  },

  {
    path:"/blogs",
    element:
    <div>
      <Header></Header>
     <Blogs></Blogs>
    </div>
  },

  {
    path:"/Docs",
    element:
    <div>
      <Header></Header>
     <Docs></Docs>
    </div>
  },

  {
    path:"/Privacy",
    element:
    <div>
      <Header></Header>
      <Privacyploice></Privacyploice>
    </div>
  },

  {
    path:"/Terms",
    element:
    <div>
      <Header></Header>
      <TermsService></TermsService>
    </div>
  },

  {
    path:"/saas",
    element:
    <div>
      <Header></Header>
      <ProductSass></ProductSass>
    </div>
  },
  {
    path:"/Subsaas",
    element:
    <div>
      <Header></Header>
      <ProductSubSaas></ProductSubSaas>
    </div>
  },
])
function App() {
 

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
