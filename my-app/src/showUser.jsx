import { useContext } from "react";
import { UserContext } from "./User";

function ShowUser() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1> {user}</h1>
        </div>
    );
}   
export default ShowUser;
