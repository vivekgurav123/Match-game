import './index.css'

const ImageItem = props => {
  const {eachImageObj, onImgClick} = props
  const {thumbnailUrl} = eachImageObj

  const onClickToCheckId = () => {
    onImgClick(thumbnailUrl)
  }

  return (
    <li className="img-item" onClick={onClickToCheckId}>
      <button type="button">
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
