// set constants that are going to be used in the actions that will be dispatched to the reducer
export const PLAY = 'PLAY'
export const MOUSE_OVER = 'MOUSE_OVER'
export const MOUSE_LEAVE = 'MOUSE_LEAVE'
export const CLICK = 'CLICK'
export const DBL_CLICK = 'DBL_CLICK'
// create actions
export function togglePlay(IsPlaying) {
  return {
    type: PLAY,
     payload: IsPlaying
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MOUSE_OVER]: (state, action) => { return { IsPlaying: true } },
  [MOUSE_LEAVE]: (state, action) => { return { IsPlaying: false } },
  [CLICK]: (state, action) => { return { IsPlaying: true } },
  [DBL_CLICK]: (state, action) => { return { IsPlaying: false } }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {IsPlaying: false}
export default function BeatboxReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  // shorthand if else statement
  return handler ? handler(state, action) : state
}
