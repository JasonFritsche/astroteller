import { useState, useEffect } from 'react'

const ASTROLOGY_SIGNS = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
]

const AstroContainer = () => {
  useEffect(() => {
    requestHoroscope()
  }, [])

  async function requestHoroscope() {
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today'
    const res = await fetch(URL, {
      method: 'POST',
    })

    const json = await res.json()

    console.log(json)
    // setHoroscope(json)
  }

  return (
    <div>
      <div class="form-group">
        <label for="paperSelects1">Sign</label>
        <select id="paperSelects1">
          {ASTROLOGY_SIGNS.map((sign) => (
            <option value={sign}>{sign}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default AstroContainer
