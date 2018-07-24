import React from 'react'

export const Controls = ({ handleChange,
  maxTones,
  activeCount,
  offset
}) => {

  const pitchSets = {
    2: 'Tritone',
    3: 'Augmented Triad',
    4: 'Diminished 7th',
    5: 'Pentatonic Scale',
    6: 'Whole Tone Scale',
    7: 'Half Diminished Scale',
    8: 'Diminished Scale'
  }
  const setInfo = pitchSets[activeCount] ? `(${pitchSets[activeCount]})` : ''
  return (
    <div>
      <label>
        <p style={{textAlign: 'center'}}>
          {`${activeCount} ${activeCount === 1 ? 'Tone' : 'Tones'} ${setInfo}`}
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
          {`Offset by ${offset} ${offset === 1 ? 'step' : 'steps'}`}
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
