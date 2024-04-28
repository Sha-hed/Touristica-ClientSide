import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewDetails from "../pages/ViewDetails";
import UpdateDetails from "../pages/UpdateDetails";
import CountryToSpot from "../pages/CountryToSpot";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-side-lake.vercel.app/spots')
            },
            {
                path: '/allSpots',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('https://assignment-10-server-side-lake.vercel.app/spots')
            },
            {
                path: '/addSpots',
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: '/myList',
                element:<MyList></MyList>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`)
            },
            {
                path: '/update/:id',
                element:<UpdateDetails></UpdateDetails> ,
                loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`)
            },
            {
                path: '/countryToSpot/:id',
                element: <CountryToSpot></CountryToSpot>,
                loader: ({ params }) => fetch(`http://localhost:5000/country/${params.id}`)
            }
        ]
    }
]);

export default router;