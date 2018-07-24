import React from 'react'
import ToneSlice from './ToneSlice'
// import { CIRCLE_OF_FIFTHS } from './constants'

export const ToneCircle = ({activeTones, activeCount, tones}) => {
  const SVG_SIZE = 400
  const VIEWBOX_ORIGIN = -1.1
  const VIEWBOX_SIZE = Math.abs(VIEWBOX_ORIGIN) * 2
  const marginHorizontal = (window.innerWidth - SVG_SIZE) / 2

  const svgStyle = {
    margin: `0 ${marginHorizontal}px`
  }

  const slicePercentage = (1 / tones.length) || 50
  const toneSlices = tones.map((tone, index) => (
    <ToneSlice
      percentage={slicePercentage}
      order={index}
      key={index}
      tone={tone}
      active={activeTones.includes(tone)}
    />
  ))
  const pitchSets = {
    2: 'Tritone',
    3: 'Augmented Triad',
    4: 'Diminished 7th',
    5: 'Pentatonic Scale',
    6: 'Whole Tone Scale',
    7: 'Half Diminished Scale',
    8: 'Diminished Scale',
    12: 'Chromatic Scale'
  }
  const setInfo = pitchSets[activeCount] ? `${pitchSets[activeCount]}` : ''
  return (
    <svg
      viewBox={`${VIEWBOX_ORIGIN} ${VIEWBOX_ORIGIN} ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      style={svgStyle}
      height={SVG_SIZE}
      width={SVG_SIZE}
    >
      {toneSlices}
      <circle cx={0} cy={0} r={0.6} fill={'#086800'}/>
      <text
        x={0}
        y={0}
        textAnchor={'middle'}
        fill={'#e0eb6a'}
        style={{
          fontSize: '0.12px'
        }}>
        {setInfo}
      </text>
    </svg>
  )
}
