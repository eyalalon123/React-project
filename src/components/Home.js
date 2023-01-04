import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { userContext } from "./context";
function Home(){

    const { user } = useContext(userContext);


    return(
        
        <div>
           
            <h1> What is up {user.name} it is from the PIZZA! </h1>
            
        </div>
    )
}

export default Home