'use client';
import { useRouter } from "next/navigation";
import { createContext,useContext,useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const router = useRouter();
    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState(null);

    async function  login(userData){
        setUser(userData);
        setIsAuth(true);
    }
    const logout =()=>{
        setUser(null);
        setIsAuth(false);
        router.push("/pages/home")
    };
    return(<AuthContext.Provider value={{user,isAuth,login,logout}}>
        {children}
    </AuthContext.Provider>);
}
export function useAuth(){
    return useContext(AuthContext);
}