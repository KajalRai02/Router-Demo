
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path:'/', 
    element: <RootPage />,
    errorElement:<ErrorPage />,
    children:[
      {index:true, element: <HomePage />},
      {path: 'products', element: <ProductPage />},
      {path: 'products/:productId', element: <ProductDetailPage />}
    ]
  }
  
])

function App() {
  return <RouterProvider router={router} />
}

export default App;













// create Browser Routes




// define the Routes
// activate teh Router and load the route defination that we defined
// we shoudl have all these components an some mean sof navigating through these routes
