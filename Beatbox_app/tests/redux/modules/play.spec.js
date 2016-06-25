import {PLAY, togglePlay, MOUSE_OVER, MOUSE_LEAVE, CLICK, DBL_CLICK, default as BeatboxReducer} from 'redux/modules/play'

describe('(Redux Module) play', function () {
  it('Should export constants PLAY, MOUSE_OVER, MOUSE_LEAVE, CLICK, DBL_CLICK.', function () {
    expect(PLAY).to.equal('PLAY'),
    expect(MOUSE_OVER).to.equal('MOUSE_OVER'),
    expect(MOUSE_LEAVE).to.equal('MOUSE_LEAVE'),
    expect(CLICK).to.equal('CLICK'),
    expect(DBL_CLICK).to.equal('DBL_CLICK')
  }) 
  describe('(Reducer)', function() {
    it('Should be a function.', function(){
    	expect(BeatboxReducer).to.be.a('function')
    })
    it('Should initialize with a state of {IsPlaying: false}', function() {
    	expect(BeatboxReducer(undefined, {})).to.equal({IsPlaying: false})
    })
    it('should return the previous state if an action was not matched', function(){
      let state = BeatboxReducer(undefined,{})
      expect(state).to.equal(false)
      state =BeatboxReducer(state, {type: '@@@@@@'})
      expect(state).to.equal(false)
      state =BeatboxReducer(state, MOUSE_OVER)
      expect(state).to.equal(true)
      state = counterReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(true)
    })
  })
 
 
 describe('(Action Creator) togglePlay',function (){
  it('should be exported as a function.', function (){
    expect(togglePlay).to.be.a('function')
  })
  it('should return an action with type "PLAY".', function (){
    expect(togglePlay()).to.have.property('type', PLAY)
 })
  it('Should assign the first argument to the "payload" property.', function () {
      expect(togglePlay).to.have.property('payload', IsPlaying)
  })
  it('Should default the "payload" property to IsPlaying if not provided.', function () {
      expect(togglePlay).to.have.property('payload', IsPlaying)
  })
})
 describe('(Action Handler) MOUSE_OVER', function () {
    it('Should change the state by the action payload\'s "IsPlaying" property.', function () {
      let state = BeatboxReducer(undefined, {})
      expect(state).to.equal({IsPlaying: false})
      state = BeatboxReducer(state, togglePlay())
      expect(state).to.equal({IsPlaying:true})
      
    })
  })
 describe('(Action Handler) MOUSE_LEAVE', function () {
    it('Should change the state by the action payload\'s "IsPlaying" property.', function () {
      let state = BeatboxReducer(undefined, {})
      expect(state).to.equal({IsPlaying: false})
      state = BeatboxReducer(state, togglePlay(IsPlaying))
      expect(state).to.equal({IsPlaying:true})
      
    })
  })
 describe('(Action Handler) CLICK', function () {
    it('Should change the state by the action payload\'s "IsPlaying" property.', function () {
      let state = BeatboxReducer(undefined, {})
      expect(state).to.equal({IsPlaying: false})
      state = BeatboxReducer(state, togglePlay(IsPlaying))
      expect(state).to.equal({IsPlaying:true})
      
    })
  })
 describe('(Action Handler) DBL_CLICK', function () {
    it('Should change the state by the action payload\'s "IsPlaying" property.', function () {
      let state = BeatboxReducer(undefined, {})
      expect(state).to.equal({IsPlaying: false})
      state = BeatboxReducer(state, togglePlay(IsPlaying))
      expect(state).to.equal({IsPlaying:true})
      
    })
  })
 })