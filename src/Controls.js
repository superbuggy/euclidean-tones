import React from 'react'

export const Controls = ({ filterTones }) => {
  return (
    <input
      type="range"
      min={0}
      max={10}
      onInput={filterTones}
    />
  )
}
