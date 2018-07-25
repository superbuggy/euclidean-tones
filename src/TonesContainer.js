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
      offset: 2,
      playing: false
    }
    this.transport = Tone.Transport
    this.pattern = null
  }

  play = () => {
    this.setState(prevState => {
      if (this.pattern) this.pattern.dispose()
      const tones = prevState.activeTones.map(tone => `${tone}4`)
      this.pattern = new Tone.Pattern((time, note) => {
        this.props.polySynth.triggerAttackRelease(note, '2n')
      }, tones)
      this.pattern.start(0)
      this.transport.start()
      return {
        playing: true
      }
    })
  }

  stop = () => {
    this.setState(prevState=>{
      this.transport.stop()
      return {
        playing: false
      }
    })
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

    return (
      <div>
        <h1>Euclidean Tones</h1>
        <ToneCircle
          tones={this.state.tones}
          activeTones={this.state.activeTones}
          activeCount={this.state.activeCount}
          playing={this.state.playing}
          play={this.play}
          stop={this.stop}
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
