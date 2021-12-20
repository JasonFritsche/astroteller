import { useState, useEffect } from 'react'
import AstroCard from './AstroCard/AstroCard'
import _ from 'lodash'

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
  const [sign, setSign] = useState('')
  const [horoscope, setHoroscope] = useState('')
  const [showHoroscope, setShowHoroscope] = useState(false)

  useEffect(() => {
    requestHoroscope()
  }, [sign])

  async function requestHoroscope() {
    let res
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`
    if (sign.length)
      res = await fetch(URL, {
        method: 'POST',
      })

    const json = await res?.json()

    if (json) {
      setHoroscope(json)
      setShowHoroscope(true)
    } else {
      setShowHoroscope(false)
    }
  }

  return (
    <div className="astro-container">
      <div className="row">
        <div className="col-3 col">
          <div className="form-group">
            <label htmlFor="paperSelects1">Sign</label>
            <select
              id="paperSelects1"
              onChange={(e) => setSign(e.target.value)}
              onBlur={(e) => setSign(e.target.value)}
            >
              <option />
              {ASTROLOGY_SIGNS.map((sign) => (
                <option value={sign} key={sign}>
                  {sign}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-9 col">
          {showHoroscope && <AstroCard horoscope={horoscope} sign={sign} />}
        </div>
      </div>
    </div>
  )
}

export default AstroContainer
