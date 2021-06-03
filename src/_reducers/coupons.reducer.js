import { couponConstants } from '../_constants'

export function coupons (state = {}, action) {
  switch (action.type) {
    case couponConstants.GETALL_REQUEST:
      return {
        loading: true
      }
    case couponConstants.GETALL_SUCCESS:
      return {
        coupons: action.coupons
      }
    case couponConstants.GENERATECOUPON_REQUEST:
      return {
        loading: true
      }
    case couponConstants.GENERATECOUPON_SUCCESS:
      return {
        coupons: action.coupons
      }
    case couponConstants.GENERATECOUPON_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}
