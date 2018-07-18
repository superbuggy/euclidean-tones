import React from 'react'

const ToneSlice = props => {
  const coordinatesFromPercentage = percentage => {
    const x = parseFloat((Math.cos(2 * Math.PI * percentage).toFixed(2)))
    const y = parseFloat((Math.sin(2 * Math.PI * percentage).toFixed(2)))
    return [x, y]
  }

  const startX = coordinatesFromPercentage(0)[0]
  const startY = coordinatesFromPercentage(0)[1]
  const endX = coordinatesFromPercentage(props.percentage)[0]
  const endY = coordinatesFromPercentage(props.percentage)[1]

  const largeArcFlag = props.percentage > 0.5 ? 1 : 0

  const pathData = [
    `M ${startX} ${startY}`,
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    `L 0 0`,
  ].join(' ')

  const turnOffset = props.order * props.percentage
  const sliceStyle = {
    transform: `rotate(${turnOffset}turn)`,
    strokeWidth: '.001',
    stroke: 'black'
  }
  return (
    <path d={pathData} fill={'#DDD'} style={sliceStyle} />
  )
}

export default ToneSlice
