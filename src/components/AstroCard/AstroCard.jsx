const AstroCard = ({
  sign,
  horoscope: {
    date_range,
    description,
    compatibility,
    mood,
    color,
    lucky_number,
    lucky_time,
  },
}) => {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <div className="card-body">
        <h4 className="card-title">{sign}</h4>
        <h5 className="card-subtitle">{date_range}</h5>
        <p className="card-text">{description}</p>
        <p>
          You are compatible with {compatibility}, your mood is {mood}, color is{' '}
          {color}, lucky number is {lucky_number}, and your lucky time is{' '}
          {lucky_time}.
        </p>
      </div>
    </div>
  )
}

export default AstroCard
