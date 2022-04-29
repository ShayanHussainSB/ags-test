import ACTION_TYPES from '../type/types'

let initialState = {
  wallet: {},
}

const walletReducer = (state = initialState, action) => {
  switch (action) {
    case ACTION_TYPES.CREATE_WALLET:
      return {
        ...state,
        wallet: action.payload,
      }
    default:
      return state
  }
}

export default walletReducer;
