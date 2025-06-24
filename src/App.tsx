
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
import SaasDeveloperTemplete from './Pages/SaasDevloperTemplete'
import Developertemplates from './Pages/Developertemplete'

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
    path:"/product",
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
    path:"/about",
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
    path:"/docs",
    element:
    <div>
      <Header></Header>
     <Docs></Docs>
    </div>
  },

  {
    path:"/privacy",
    element:
    <div>
      <Header></Header>
      <Privacyploice></Privacyploice>
    </div>
  },

  {
    path:"/terms",
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
    path:"/subsaas",
    element:
    <div>
      <Header></Header>
      <ProductSubSaas></ProductSubSaas>
    </div>
  },
  {
    path:"/saasdevelopertemplete",
    element:
    <div>
      <Header></Header>
      <SaasDeveloperTemplete></SaasDeveloperTemplete>
    </div>
  },
  {
    path:"/developertemplete",
    element:
    <div>
      <Header></Header>
      <Developertemplates></Developertemplates>
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
