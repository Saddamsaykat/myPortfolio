import { createBrowserRouter } from "react-router-dom";
import Component from "../Component";
import About from "../Main/About/About";

const Route = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Component></Component>,
    children: [
        {
            path: "/about",
            element: <About></About>
        }
    ]
    }, 
   ]); 

   export default Route