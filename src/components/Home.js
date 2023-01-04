import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { userContext } from "./context";
function Home(){

    const { user } = useContext(userContext);

    return(
        
        <div>
            <h1> What is up {user.name} it is from the PIZZA! </h1>
           <button>Info</button>
           <button>ToDo</button>
           <button>Posts</button>
           <button>Albums</button>
           <button>LogOut</button>

            
        </div>
    )
}

export default Home