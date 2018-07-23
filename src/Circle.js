import React, { Component } from 'react'
import ToneSlice from './ToneSlice'

export default class Circle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tones: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    }
  }

  render () {
    const SVG_SIZE = 400
    const marginVertical = (window.innerHeight - SVG_SIZE) / 2
    const marginHorizontal = (window.innerWidth - SVG_SIZE) / 2
    console.log(window.innerHeight, window.innerWidth)
    const svgStyle = {
      transform: 'rotate(-0.25turn)',
      margin: `${marginVertical}px ${marginHorizontal}px`
    }

    const slicePercentage = (1 / this.state.tones.length) || 50
    const toneSlices = this.state.tones.map((tone, index) => {
      return (
        <ToneSlice 
          percentage={slicePercentage}
          order={index}
          key={index}
          tone={tone}
        />
      )
    })

    return (
      <svg
        viewBox="-1.5 -1.5 3 3"
        style={svgStyle}
        height={SVG_SIZE}
        width={SVG_SIZE}
      >
        { toneSlices }
      </svg>
    )
  }
}
