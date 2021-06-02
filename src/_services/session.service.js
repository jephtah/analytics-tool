import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'

export const sessionService = {
  getAll,
  getPaginated,
  getSearch
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
async function getSearch (searchStr) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }
  const response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=&search_prev=`, requestOptions)
  const sessions = response.data.data
  return sessions
}

async function getPaginated (hasNext, hasPrev) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = hasNext ? await axios(`${config.testUrl}/admin/manage-sessions/?sess_next=${hasNext}`, requestOptions) : await axios(`${config.testUrl}/admin/manage-sessions/?sess_next=${hasPrev}`, requestOptions)
  const sessions = response.data.data
  return sessions
}
