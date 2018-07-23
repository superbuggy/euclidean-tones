import React, { Component } from 'react'
import ToneSlice from './ToneSlice'
// import { CIRCLE_OF_FIFTHS } from './constants'
import { TONES } from './constants'

export default class Circle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tones: TONES
    }
  }

  render () {
    const SVG_SIZE = 400
    const VIEWBOX_ORIGIN = -1.1
    const VIEWBOX_SIZE = Math.abs(VIEWBOX_ORIGIN) * 2
    const marginVertical = (window.innerHeight - SVG_SIZE) / 2
    const marginHorizontal = (window.innerWidth - SVG_SIZE) / 2
    console.log(window.innerHeight, window.innerWidth)
    const svgStyle = {
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
        viewBox={`${VIEWBOX_ORIGIN} ${VIEWBOX_ORIGIN} ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        style={svgStyle}
        height={SVG_SIZE}
        width={SVG_SIZE}
      >
        { toneSlices }
        <circle cx={0} cy={0} r={0.6} fill={'white'}/>
      </svg>
    )
  }
}
