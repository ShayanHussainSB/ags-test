import ACTION_TYPES from '../type/types'

let initialState = {
  account: {},
}

const accountReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.CREATE_ACCOUNT:
      return {
        account: action.payload,
      }
    case ACTION_TYPES.UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      }
    default:
      return state
  }
}

export default accountReducer
