import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'

export const zoneService = {
  getAll,
  getSearch,
  getPaginated,
  deletePost,
  updatePost
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

async function getPaginated (hasNext, hasPrev) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = hasNext ? await axios(`${config.testUrl}/admin/manage-topics?post_next==${hasNext}`, requestOptions) : await axios(`${config.testUrl}/admin/manage-topics?post_prev=${hasPrev}`, requestOptions)

  const zones = response.data.data
  return zones
}

async function getSearch (searchStr, hasNext, hasPrev) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  let response
  if (hasNext) {
    response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=${hasNext}`, requestOptions)
  }
  if (hasPrev) {
    response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_prev=${hasPrev}`)
  }
  if (hasNext && hasPrev) {
    response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=${hasNext}&search_prev=${hasPrev}`, requestOptions)
  }
  response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=&search_prev=`, requestOptions)

  const zones = response.data.data

  return zones
}

async function deletePost (slug) {
  const requestOptions = {
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = await axios.post(`${config.testUrl}/admin/delete-post/${slug}`, requestOptions)
  const zones = response.message
  return zones
}

async function updatePost (slug, title, content) {
  const requestOptions = {
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = await axios.put(`${config.testUrl}/admin/edit-post/${slug}`, { title, content }, requestOptions)
  const zone = response.message
  return zone
}
