import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types' // 校验器
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BottomBtn = ({ text, colorClass, icon, onBtnClick }) => {
  return (
    <button
      type="button"
      className={`btn btn-block no-border ${colorClass}`}
      onClick={() => { onBtnClick() }}
    >
      <FontAwesomeIcon icon={icon} size="lg" className="mr-2" />
      {text}
    </button>
  )
}

BottomBtn.propTypes = {
  text: PropTypes.string,
  colorClass: PropTypes.string,
  icon: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func
}

BottomBtn.defaultProps = {
  text: '按钮',
  onBtnClick: () => {}
}

export default BottomBtn