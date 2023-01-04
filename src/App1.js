import { Link, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import { UserProvider } from './components/context';
import "./App.css";
import { Info } from './components/Info';


function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/Home' element={<Home />}></Route>
            </Routes>
            {/* <Link to={"/"}>Go to Login page</Link> */}
        </UserProvider>
    )
}


export default App