import {TOGGLE_IS_PLAYING, TogglePlay, MOUSE_OVER, MOUSE_LEAVE, CLICK, DBL_CLICK, default as BeatboxReducer} from 'redux/modules/play'

describe('(Redux Module) play', function () {
  it('Should export constants TOGGLE_IS_PLAYING, MOUSE_OVER, MOUSE_LEAVE, CLICK, DBL_CLICK.', function () {
    expect(TOGGLE_IS_PLAYING).to.equal('TOGGLE_IS_PLAYING'),
    expect(MOUSE_OVER).to.equal('MOUSE_OVER'),
    expect(MOUSE_LEAVE).to.equal('MOUSE_LEAVE'),
    expect(CLICK).to.equal('CLICK'),
    expect(DBL_CLICK).to.equal('DBL_CLICK')
  }) 
  describe('(Reducer)', function() {
    it('Should be a function.', function(){
    	expect(BeatboxReducer).to.be.a('function')
    })
    it('should inititailize with the initial state containing an(object)', function() {
      expect(BeatboxReducer(undefined, {})).to.be.an('object')
    })
    it('initialstate should have a property isPlaying:false', function(){
      expect(BeatboxReducer(undefined, {})).to.have.property('isPlaying',false)
    })
    it('should return the previous state if an action was not matched', function(){
      let state = BeatboxReducer(undefined,{})
      expect(state).to.be.an('object')
      expect(state).to.have.property('isPlaying',false)
      state =BeatboxReducer(state, {type: '@@@@@@'})
      expect(state).to.have.property('isPlaying',false)
      state =BeatboxReducer(state, TogglePlay(true))
      expect(state).to.have.property('isPlaying',true)
      state = BeatboxReducer(state, {type: '@@@@@@@'})
      expect(state).to.have.property('isPlaying',true)
    })
  })
 
 
 describe('(Action Creator) TogglePlay',function (){
  it('should be exported as a function.', function (){
    expect(TogglePlay).to.be.a('function')
  })
  it('should return an action with type "TOGGLE_IS_PLAYING".', function (){
    expect(TogglePlay()).to.have.property('type', TOGGLE_IS_PLAYING)
 })
  it('Should assign the first argument to the "isPlaying" property.', function () {
      expect(TogglePlay(true)).to.have.property('isPlaying', true )
  })
  it('Should default the "isPlaying" property to false if not provided.', function () {
      expect(TogglePlay()).to.have.property('isPlaying', false)
  })
})
 
 })