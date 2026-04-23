import { useContext } from "react";
import { UserContext } from "./User";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowUser() {
    const user = useContext(UserContext);
    return (
        <>
        <p class= "text-danger" >{user}</p>
        </>
    );
}   
export default ShowUser;
