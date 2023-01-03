import { Link, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function App(){
    return(
        <>
        <Link to={"/Login"}>Login</Link>
        <Routes>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Home' element={<Home />}></Route>
        </Routes>
        </>
    )
}


export default App