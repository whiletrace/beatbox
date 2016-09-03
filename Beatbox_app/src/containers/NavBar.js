import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'



export const handleSelect = function (event, actionKey) {
  event.preventDefault()
  // Hack to make redux and the react bootstrap navbar play nice
  return (dispatch, getState) => {
    if (typeof actionKey === 'string') {
      // Route path
      dispatch(push(actionKey))
    } else {
      // Action
      dispatch(actionKey)
    }
  }
}

export class NavBar extends React.Component {
  
  render () {
    

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>Our Site</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          
         
        </Navbar>
      </div>
    )
  }
}

export default (NavBar)
