import { cookies } from "next/headers"

const refreshToken = async () =>{
    const cookieStore = cookies()

    const refresh = (await cookieStore).
}

export default refreshToken