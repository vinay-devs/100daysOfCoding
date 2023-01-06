import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"
import {fetchAPI} from "./redux/MovieActions"
import { useDispatch } from "react-redux"
export default function App(){
    const dispatch=useDispatch()
    dispatch(fetchAPI())
    return(
        <div>
        <BrowserRouter>
        <Header/>
           <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/favorite' element={<Favorite/>}>Favorite</Route>
           </Routes>
        </BrowserRouter>
        </div>
    )
}