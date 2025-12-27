import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./home/home"
import Vehicles from "./pages/Vehicles"
import Details from "./pages/Details"
import About from "./pages/about/About"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/login"
import Info from "./pages/info"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/vehicles',
          element: <Vehicles />
        },
        {
          path: '/details',
          element: <Details />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/signUp',
          element: <SignUp />
        },
        {
          path: '/login',
          element: <LogIn/>
        },
        {
          path: 'info/:id',
          element: <Info/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App