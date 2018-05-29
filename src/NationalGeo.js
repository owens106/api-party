import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import './NationalGeo.css'
import NationalGeoInfo from './NationalGeoInfo'

class NationalGeo extends Component {
  render() {
    return (
      <div className="NationalGeo">
        <img
          src="http://press.nationalgeographic.com/files/2018/04/National-Geographic-Logo.jpg"
          alt="national geographic"
          className="logo"
        />

        <h2>Select a link</h2>
        <ul className="navLinks">
          <li>
            <NavLink to="/nationalGeo/photo-of-day">Photo of the day</NavLink>
          </li>
          <li>
            <NavLink to="/nationalGeo/article-of-day">Article of the Day</NavLink>
          </li>
          
        </ul>

        <Route path="/NationalGeo/:info" component={NationalGeoInfo} />
        <Route exact path="/NationalGeo" render={() => <h2>No link selected.</h2>} />
      </div>
    )
  }
}

export default NationalGeo