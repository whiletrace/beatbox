import React from 'react'
import classes from './BeatBoxView.scss'

export default class BeatBoxView extends React.Component {
  render () {
    return (
      <div className={classes['container']}>
        <div className='container'>
          <h1 className={classes['header']}> while(Trace)
              Beatbox
          </h1>
        </div>
        <div className={classes['buttonContainer']}>
          <div className='button-group'>
            <a className='button'>One</a>
            <a className='button'>Two</a>
            <a className='button'>Three</a>
          </div>
          <div className='button-group'>
            <a className='button'>One</a>
            <a className='button'>Two</a>
            <a className='button'>Three</a>
          </div>
          <div className='button-group'>
            <a className='button'>One</a>
            <a className='button'>Two</a>
            <a className='button'>Three</a>
          </div>
        </div>
      </div>
    )
  }
}
