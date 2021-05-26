import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'

export const sessionService = {
  getAll
}

async function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios(`${config.testUrl}/admin/manage-sessions/`, requestOptions)

  const sessions = response.data.data

  return sessions
}
