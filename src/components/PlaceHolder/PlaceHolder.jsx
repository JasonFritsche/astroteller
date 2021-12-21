import { Fragment } from 'react'

const PlaceHolder = (props) => {
  const { imgSrc, descriptionText, maxHeight } = props
  return (
    <Fragment>
      <img src={imgSrc} style={{ maxHeight: `${maxHeight}em` }} />
      <p>{descriptionText}</p>
    </Fragment>
  )
}

export default PlaceHolder
