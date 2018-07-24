import React, { Component } from 'react'
import { TONES } from './constants'
import { ToneCircle } from './ToneCircle'
import { Controls } from './Controls'
import { generatePattern, rotate } from './utils'

export default class TonesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tones: TONES,
      activeTones: []
    }
  }

  filterTones = (event) => {
    const activeCount = parseInt(event.target.value, 10)
    const pattern = generatePattern(activeCount, this.state.tones.length)
    this.setState(prevState => {
      return {
        activeTones: prevState.tones.filter((_, index) => pattern[index])
      }
    },
      _ => {console.log(this.state.activeTones)}
    )

  }

  render () {
    return (
      <div>
        <ToneCircle tones={this.state.tones} />
        <Controls filterTones={this.filterTones} />
      </div>
    )
  }
}
