'use client'

import logoutHandler from "@/shared/functions/logoutHandler"

const Rag = () =>{
    return <button onClick={()=>logoutHandler()}>
        logout
    </button>
}

export default Rag