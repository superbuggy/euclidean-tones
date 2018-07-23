import React from 'react'

const ToneSlice = props => {
  const coordinatesFromPercentage = percentage => {
    const x = Math.cos(2 * Math.PI * percentage)
    const y = Math.sin(2 * Math.PI * percentage)
    return { x, y }
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

  const sliceStyle = {
    strokeWidth: '.001',
    stroke: 'black'
  }

  return (
    <g>
      <path d={pathData} fill={'#DDD'} style={sliceStyle} />
      <text style={{fontSize: '.001px'}} x={0} y={0} fill='black'>
        {props.tone}
      </text>
    </g>
  )
}

export default ToneSlice
