// ------------------------------------
// Constants
// ------------------------------------
export const TAKE_ALOOK = 'TAKE_ALOOK'

// ------------------------------------
// Actions
// ------------------------------------
export function takeALook (value = 1) {
  return {
    type: TAKE_ALOOK,
    payload: value
  }
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TAKE_ALOOK]: (state, action) => {

    return { value: state.value += action.payload, ...state }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { value: 0 }
export default function broReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
