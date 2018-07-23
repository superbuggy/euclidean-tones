import React, { Component } from 'react'
import { TONES } from './constants'
import { ToneCircle } from './ToneCircle'

export default class TonesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tones: TONES
    }
  }

  render () {
    return (
      <ToneCircle tones={this.state.tones} />
    )
  }
}
