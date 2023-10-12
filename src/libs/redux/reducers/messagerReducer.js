import { MessagerType } from "../types/messagerType"
const initState = {
  loading: false,
  payload: null
}
export function messagerReducer( state = initState, action = { type: "", payload: null }) {
  switch (action.type) {
    case MessagerType.GET_MESSAGE:
      return {
        loading: true,
        payload: action.payload
      }
    case MessagerType.GET_MESSAGE_SUCCESS:
      return {
        loading: false,
        payload: action.payload
      }
    case MessagerType.GET_MESSAGE_FAILURE:
      return {
        loading: false,
        payload: {
          ...action.payload,
          isError: true,
        }
      }
    default:
      return state
  }
}