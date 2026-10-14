import axios from "axios"

const getProfile = async () => {
    console.log('fetch')
    const res = await axios.get('/api/requests/user/profile')

    return res
}

export default getProfile