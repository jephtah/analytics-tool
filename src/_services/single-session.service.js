import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'

export const singleSessionService =
{
  getSingleSession
}

async function getSingleSession (username) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios(`${config.testUrl}/admin/user-sessions/${username}`, requestOptions)
  const singleSession = response.data.data
  return singleSession
}
