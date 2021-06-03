import axios from 'axios'
import { config } from '../_config'
import { authHeader } from '../_helpers'

export const couponService = {
  getAll,
  generateCoupon
}

async function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios(`${config.testUrl}/admin/manage-coupons/`, requestOptions)

  const coupons = response.data
  return coupons
}

async function generateCoupon (couponAmount, couponType, expires, couponeQuantity, couponCode) {
  const requestOptions = {
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }

  const response = await axios.post(`${config.testUrl}/admin/generate-coupon`, { couponAmount, couponType, expires, couponeQuantity, couponCode }, requestOptions)
  const coupons = response.data
  return coupons
}
