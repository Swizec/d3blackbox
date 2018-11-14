import React, { Component } from 'react'
import SSIMG from '../images/ssimg.png'
import GITIMG from '../images/GITIMG.png'

export default class images extends Component {
  render() {
    return (
      <div>
        <img src={SSIMG} alt='img'/>
        <img src={GITIMG} alt='img'/>
      </div>
    )
  }
}
