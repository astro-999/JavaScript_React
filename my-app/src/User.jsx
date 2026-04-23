import { createContext, useState } from "react";
import ShowUser from "./ShowUser";

export const UserContext = createContext();


function User() {
    // const [user, setUser] = useState("John Doe");
   const user = "John Doe";
    return (
        <>
            <UserContext.Provider value={user}>
                <div>
                 <h2>  User Name :</h2>
                </div>
        <ShowUser />
        </UserContext.Provider >
        </>
    );
}
export default User;