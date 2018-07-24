import React from 'react'

export const Controls = ({ filterTones, maxTones }) => {
  return (
    <input
      type="range"
      min={0}
      max={maxTones}
      onInput={filterTones}
      style={{
        display: 'block',
        margin: '0 auto'
      }}
    />
  )
}
