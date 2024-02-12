import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const LinkQuestion = ()=>{

    const { data: session } = useSession();
    if (session && session.user){
        return <></>
    }
    return(
        <Link className=" transition-colors text-black hover:text-purple-800 align-center" href={"/auth/signIn"}>
          Already have an account? SingIn here!
        </Link>
    )
}

export default LinkQuestion;