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
                    <h1>User Name : </h1>
                </div>
        <ShowUser />
        </UserContext.Provider >
        </>
    );
}
export default User;