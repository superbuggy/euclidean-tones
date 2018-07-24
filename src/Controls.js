import React from 'react'

export const Controls = ({ handleChange,
  maxTones,
  activeCount,
  offset
}) => {
  return (
    <div>
      <label>
        <p style={{textAlign: 'center'}}>
          {activeCount} {activeCount === 1 ? 'Tone' : 'Tones'}
        </p>
        <input
          type="range"
          name="activeCount"
          min={0}
          max={maxTones}
          value={activeCount}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '0 auto'
          }}
        />
      </label>
      <label>
        <p style={{textAlign: 'center'}}>
          {`${offset} ${offset === 1 ? 'step' : 'steps'}`}
        </p>
        <input
          type="range"
          name="offset"
          min={0}
          max={maxTones - 1}
          value={offset}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '0 auto'
          }}
        />
      </label>
    </div>
  )
}
