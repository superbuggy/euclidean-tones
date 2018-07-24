import React from 'react'

export const Controls = ({ handleChange, maxTones }) => {
  return (
    <div>
      <label>
        <p style={{textAlign: 'center'}}>
          Number Active
        </p>
        <input
          type="range"
          name="activeCount"
          min={0}
          max={maxTones}
          onInput={handleChange}
          style={{
            display: 'block',
            margin: '0 auto'
          }}
        />
      </label>
      <label>
        <p style={{textAlign: 'center'}}>
          Offset
        </p>
        <input
          type="range"
          name="offset"
          min={0}
          max={maxTones}
          onInput={handleChange}
          style={{
            display: 'block',
            margin: '0 auto'
          }}
        />
      </label>
    </div>
  )
}
