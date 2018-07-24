import React from 'react'
import ToneSlice from './ToneSlice'
// import { CIRCLE_OF_FIFTHS } from './constants'

export const ToneCircle = props => {
  const SVG_SIZE = 400
  const VIEWBOX_ORIGIN = -1.1
  const VIEWBOX_SIZE = Math.abs(VIEWBOX_ORIGIN) * 2
  const marginHorizontal = (window.innerWidth - SVG_SIZE) / 2

  const svgStyle = {
    margin: `0 ${marginHorizontal}px`
  }

  const slicePercentage = (1 / props.tones.length) || 50
  const toneSlices = props.tones.map((tone, index) => (
    <ToneSlice
      percentage={slicePercentage}
      order={index}
      key={index}
      tone={tone}
      active={props.activeTones.includes(tone)}
      isRoot={tone === props.root}
    />
  ))

  return (
    <svg
      viewBox={`${VIEWBOX_ORIGIN} ${VIEWBOX_ORIGIN} ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      style={svgStyle}
      height={SVG_SIZE}
      width={SVG_SIZE}
    >
      {toneSlices}
      <circle cx={0} cy={0} r={0.6} fill={'white'} />
    </svg>
  )
}
