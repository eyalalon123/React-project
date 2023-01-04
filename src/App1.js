import { Link, Routes, Route,Navigate} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function App(){
    return(
        <>
        {/* <Link to={"/Login"}>Login</Link> */}
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Home' element={<Home />} />
        </Routes>
        </>
    )
}


export default App