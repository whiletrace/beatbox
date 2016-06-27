// set constants that are going to be used in the actions that will be dispatched to the reducer
export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING';
export const MOUSE_OVER = 'MOUSE_OVER'
export const MOUSE_LEAVE = 'MOUSE_LEAVE'
export const CLICK = 'CLICK'
export const DBL_CLICK = 'DBL_CLICK'
// create actions
export function TogglePlay(isPlaying:boolean = false): Action {
  return {
    type: TOGGLE_IS_PLAYING,
    isPlaying,
}
}
// ------------------------------------
// Action Handlers
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {isPlaying: false}
export default function BeatboxReducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_IS_PLAYING:
     return Object.assign({},state,{
     isPlaying: action.isPlaying,
     })
     console.log(state)
    case MOUSE_LEAVE:
     return Object.assign({},state,{
      isPlaying: false
     })
     case CLICK:
     return Object.assign({},state,{
      isPlaying: true
     })
    case DBL_CLICK:
     return Object.assign({},state,{
      isPlaying: false
     })
     default:
      return state
   }
  }