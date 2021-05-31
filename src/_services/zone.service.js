import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'

export const zoneService = {
  getAll,
  getSearch
}

async function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios(`${config.testUrl}/admin/manage-topics/`, requestOptions)

  const zones = response.data.data

  return zones
}

async function getSearch (searchStr) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }
  const value = `${config.testUrl}/admin/search?f=posts&q=${searchStr}&per_page=10&search_next=&search_prev=`
  console.log(value)
  const response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=&search_prev=`, requestOptions)
  const zones = response.data.data
  console.log(zones)

  return zones
}
