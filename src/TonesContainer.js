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
      offset: 0,
      root: TONES[0]
    }
  }

  filterTones = () => {
    this.setState(({tones, offset, activeCount}) => {
      const pattern = rotate(generatePattern(activeCount, tones.length), offset)
      const activeTones = tones.filter((_, index) => pattern[index])
      return {
        activeTones,
        root: activeTones[offset % activeTones.length]
      }
    })
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
          root={this.state.root}
        />
        <Controls
          handleChange={this.handleChange}
          maxTones={this.state.tones.length}
        />
      </div>
    )
  }
}
