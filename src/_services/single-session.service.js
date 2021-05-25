import axios from 'axios'
import { config } from "../_config"
import { authHeader } from "../_helpers"

export const singleSessionService = 
{
    getSingleSession
}

async function getSingleSession (userId) {

    const requestOptions = {
        method: "GET",
        header: { ...authHeader(), 'Content-Type': 'application/json' },
    }

    const response = await axios(`${config.testUrl}${userId}`, requestOptions)

    const singleSession = response.data.data

    return singleSession
}