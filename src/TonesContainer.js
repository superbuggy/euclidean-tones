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
      activeTones: TONES,
      activeCount: TONES.length,
      offset: 0
    }
  }

  filterTones = () => {
    const pattern = rotate(
      generatePattern(this.state.activeCount, this.state.tones.length),
      this.state.offset
    )
    this.setState(prevState => ({
      activeTones: prevState.tones.filter((_, index) => pattern[index])
    }),
      _ => {console.log(this.state.activeTones)}
    )
  }

  handleChange = event => {
    event.persist()
    this.setState(
      _ => ({ [event.target.name]: parseInt(event.target.value, 10) }),
      this.filterTones
    )
  }

  render () {
    return (
      <div>
        <ToneCircle
          tones={this.state.tones}
          activeTones={this.state.activeTones}
        />
        <Controls
          handleChange={this.handleChange}
          maxTones={this.state.tones.length}
        />
      </div>
    )
  }
}
