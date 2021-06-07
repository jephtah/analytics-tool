import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'
import { alertActions } from '../_actions/alert.actions'

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

async function getPaginated (hasNext, hasPrevious) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = hasNext ? await axios(`${config.testUrl}/admin/manage-topics?post_next=${hasNext}`, requestOptions) : await axios(`${config.testUrl}/admin/manage-topics?post_prev=${hasPrevious}`, requestOptions)

  const zones = response.data.data
  return zones
}

async function getSearch (searchStr, hasNext, hasPrevious) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  let response
  if (hasNext) {
    response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=${hasNext}`, requestOptions)
  }
  if (hasPrevious) {
    response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_prev=${hasPrevious}`)
  }
  if (hasNext && hasPrevious) {
    response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=${hasNext}&search_prev=${hasPrevious}`, requestOptions)
  }
  response = await axios(`${config.testUrl}/admin/search?f=users&q=${searchStr}&per_page=10&search_next=&search_prev=`, requestOptions)

  const zones = response.data.data

  return zones
}

async function deletePost (slug) {
  const requestOptions = {
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = await axios.delete(`${config.testUrl}/admin/delete-post/${slug}`, requestOptions)
  const zones = response
  return zones.data
}

async function updatePost (slug, title, content) {
  const requestOptions = {
    headers: { ...authHeader(), 'Content-type': 'application/json' }
  }

  const response = await axios.put(`${config.testUrl}/admin/edit-post/${slug}`, { title, content }, requestOptions)
  const zone = response.message
  return zone
}
