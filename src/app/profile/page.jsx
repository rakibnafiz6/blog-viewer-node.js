"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const page = () => {
    const {isAuthenticated} = useKindeAuth();
    const router = useRouter();

    useEffect(()=>{
        if(!isAuthenticated){
            router.push('/api/auth/login');
        }
    },[isAuthenticated]);

    if(!isAuthenticated){
        return <p>Redirecting to login...</p>;
    }


    return (
        <div>
            <h2 className="text-center text-2xl md:text-3xl font-bold mt-40">Welcome to your profile!</h2>
            
        </div>
    );
};

export default page;