import React,{useContext} from 'react';
import { userContext } from "./context";

export function Info(){
    const { user } = useContext(userContext);

    return (
        <>
        <h2>{user.name}</h2>
        <h2>{user.id}</h2>
        <h2>fgh</h2>
        <h2>fgh</h2>
        <h2>fgh</h2>
        <h2>fgh</h2>

        </>)
}
