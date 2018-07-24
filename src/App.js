import React, { Component } from 'react'
import './App.css'
import TonesContainer from './TonesContainer'
import Tone from 'tone'

class App extends Component {
  render () {
    const polySynth = new Tone.PolySynth(12, Tone.Synth).toMaster()
    return (
      <TonesContainer polySynth={polySynth} />
    )
  }
}

export default App
