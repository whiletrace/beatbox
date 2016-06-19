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
    it('Should initialize with a state of false(Boolean).', function() {
    	expect(BeatboxReducer(undefined, {})).to.equal({IsPlaying: false})
    })
  })
})