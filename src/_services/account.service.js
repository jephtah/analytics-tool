import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'

export const accountService = {
  getAll,
  getSearch,
  getPaginated
}

async function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios(`${config.testUrl}/admin/manage-docs-couns`, requestOptions)
  console.log(response)
  const accounts = response.data.data
  console.log(response.data)
  console.log(accounts)
  return accounts
}

async function getPaginated (hasNext, hasPrev) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = hasNext ? await axios(`${config.testUrl}/admin/manage-docs-couns?post_next=${hasNext}`, requestOptions) : await axios(`${config.testUrl}/admin/manage-docs-couns?post_prev=${hasPrev}`, requestOptions)

  const accounts = response.data.data
  return accounts
}

async function getSearch (searchStr) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=&search_prev=`, requestOptions)

  const accounts = response.data.data
  console.log(accounts)

  return accounts
}
