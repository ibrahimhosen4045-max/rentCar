import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] =useState(null);

    const correctEmail = "example@gmail.com";
    const correctPassword = "1234";

    const login =(email, password)=>{
        if(email === correctEmail && password === correctPassword){
            setUser({email})
            return {success: true};
        }
        else{
            return {success: false, message: "Invalid email or password"}
        }
    }
    const logout = ()=> setUser(null);

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider