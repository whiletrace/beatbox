

// set constants that are going to be used in the actions that will be dispatched to the reducer
export const PLAY = 'PLAY'

 
 // create actions

export function togglePlay (IsPlaying){
	return {
		type: PLAY,
		payload: IsPlaying
	}

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [mouseover]: (state, action) => { return { IsPlaying: true } },
  [mouseleave]: (state, action) => { return { IsPlaying: false } },
  [click]: (state, action) => { return { IsPlaying: true } },
  [dblclick]: (state, action) => { return { IsPlaying: false } }
}

	// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {IsPlaying: false}
export default function BeatboxReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  //shorthand if else statement
  return handler ? handler(state, action) : state
}