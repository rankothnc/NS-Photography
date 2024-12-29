import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home'
import Error from '../Pages/Shared/Error/Error';
import Gallery from '../Pages/Photography/Landscape/Landscape';
import Photo_Banner from '../Pages/Home/Banner/Banner/Photo_Banner';
import Landscape from '../Pages/Photography/Landscape/Landscape';
import Location from '../Pages/Photography/Location/Location';
import Travelling from '../Pages/Photography/Travelling/Travelling';
import WildLife from '../Pages/Photography/Wildlife/Wildlife';
import MiniGallery from '../Pages/Photography/Landscape/Land_mini_gallery';
import TMiniGallery from '../Pages/Photography/Travelling/T_mini_gallery';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/landscape', 
                element: <Landscape />
            },
            {
                path: '/location', 
                element: <Location />
            },
            {
                path: '/travelling', 
                element: <Travelling />
            },
            {
                path: '/wildlife', 
                element: <WildLife />
            },
            {
                path: '/gallery/:id',
                element: <TMiniGallery/>
            },
        ]
    }
])

export default router;