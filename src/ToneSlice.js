import React from 'react'



const ToneSlice = props => {
  const coordinatesFromPercentage = percentage => {
    const offsetPercentage = percentage - .25 // Circle need to be rotated -90 degrees
    return {
      x: Math.cos(2 * Math.PI * offsetPercentage),
      y: Math.sin(2 * Math.PI * offsetPercentage)
    }
  }

  const turnOffset = props.order * props.percentage
  const startX = coordinatesFromPercentage(turnOffset).x
  const startY = coordinatesFromPercentage(turnOffset).y
  const endX = coordinatesFromPercentage(props.percentage + turnOffset).x
  const endY = coordinatesFromPercentage(props.percentage + turnOffset).y

  const largeArcFlag = props.percentage > 0.5 ? 1 : 0

  const pathData = [
    `M ${startX} ${startY}`,
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    `L 0 0`,
  ].join(' ')

  const textX = coordinatesFromPercentage(props.percentage / 2 + turnOffset).x * 0.8
  const textY = coordinatesFromPercentage(props.percentage / 2 + turnOffset).y * 0.8

  const sliceStyle = {
    strokeWidth: '.05',
    stroke: '#086800',
  }

  const textStyle = {
    fontSize: '.15px',
    fill: props.active ? '#086800' : '#d3e510'
  }

  return (
    <g>
      <path 
        d={pathData}
        fill={props.active ? '#d3e510' : 'transparent'}
        style={sliceStyle}
      />
      <text style={textStyle} dx={'-.5em'} dy={'.5em'} x={textX} y={textY}>
        {props.tone}
      </text>
    </g>
  )
}

export default ToneSlice
