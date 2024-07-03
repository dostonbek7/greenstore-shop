import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import SinglePlant from "./pages/SinglePlant";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/plants",
          element: <Plants />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path:'/plant/:id',
          element:<SinglePlant/>
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
