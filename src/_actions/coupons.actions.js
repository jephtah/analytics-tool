import { couponConstants } from '../_constants'
import { couponService } from '../_services'

export const couponActions = {
  getAllCoupons,
  generateCoupon
}

function getAllCoupons () {
  return async dispatch => {
    dispatch(request())

    try {
      const accounts = await couponService.getAll()
      dispatch(success(accounts))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request () { return { type: couponConstants.GETALL_REQUEST } }
  function success (coupons) { return { type: couponConstants.GETALL_SUCCESS, coupons } }
  function failure (error) { return { type: couponConstants.GETALL_FAILURE, error } }
}

function generateCoupon (couponAmount, couponType, expires, couponeQuantity, couponCode) {
  return async dispatch => {
    dispatch(request(couponAmount, couponType, expires, couponeQuantity, couponCode))

    try {
      const coupons = await couponService.getAll()
      dispatch(success(coupons))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (couponAmount, couponType, expires, couponeQuantity, couponCode) { return { type: couponConstants.GETALL_REQUEST, couponAmount, couponType, expires, couponeQuantity, couponCode } }
  function success (coupons) { return { type: couponConstants.GETALL_SUCCESS, coupons } }
  function failure (error) { return { type: couponConstants.GETALL_FAILURE, error } }
}
