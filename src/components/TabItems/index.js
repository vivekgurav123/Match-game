import './index.css'

const TabItems = props => {
  const {eachTab, onTabClick} = props
  const {tabId, displayText} = eachTab

  const onBtnClick = () => {
    onTabClick(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onBtnClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
