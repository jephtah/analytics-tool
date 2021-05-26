import { config } from '../_config'
import { authHeader } from '../_helpers'
import axios from 'axios'

export const dashboardService = {
  getAll
}

async function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios(`${config.testUrl}/admin/home/`, requestOptions)

  const { data } = response.data
  console.log(data)

  return data
}
