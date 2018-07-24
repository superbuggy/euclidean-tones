import React, { Component } from 'react'
import Tone from 'tone'

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
      // polySynth: new Tone.PolySynth(12, Tone.Synth).toMaster()
    }
  }

  play = () => {
    var polySynth = new Tone.PolySynth(12, Tone.Synth).toMaster();
    //play a chord
    polySynth.triggerAttackRelease(this.state.activeTones, "2n");
  }

  filterTones = () => {
    this.setState(({tones, offset, activeCount}) => {
      const pattern = rotate(generatePattern(activeCount, tones.length), offset)
      return {
        activeTones: tones.filter((_, index) => pattern[index])
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
    // this.play()
    //play a chord
    // this.props.polySynth.triggerAttackRelease(this.state.activeTones, "2n");

    return (
      <div>
        <h1>Euclidean Tones</h1>
        <ToneCircle
          tones={this.state.tones}
          activeTones={this.state.activeTones}
          activeCount={this.state.activeCount}
          root={this.state.root}
        />
        <Controls
          offset={this.state.offset}
          activeCount={this.state.activeCount}
          handleChange={this.handleChange}
          maxTones={this.state.tones.length}
        />
      </div>
    )
  }
}
