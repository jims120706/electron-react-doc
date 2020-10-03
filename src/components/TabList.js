import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types' // 校验器
import classNames from 'classnames'; // 类名拼接库
import './TabList.scss'

const TabList = ({ files, activeId, unsaveIds, onTabClick, onTabClose }) => {
  return (
    <ul className="nav nav-pills tablist-component">
      {
        files.map(file => {
          // 编辑过的圆点
          const withUnsavedMark = unsaveIds.includes(file.id)
          // 拼接class的
          const fClassName = classNames({
            'nav-link': true,
            'active': file.id === activeId,
            "withUnsaved": withUnsavedMark,
          })
          return (
            <li className="nav-item" key={file.id}>
              <a
                href="#"
                className={fClassName}
                onClick={(e) => { e.preventDefault(); onTabClick(file.id) }}
              >
                {file.title}
                <span className="ml-2 close-icon" onClick={e => { e.stopPropagation(); onTabClose(file.id) }}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                {
                  withUnsavedMark && 
                  <>
                    <span className="rounded-circle ml-2 unsaved-icon">

                    </span>
                  </>
                }
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

TabList.propTypes = {
  flies: PropTypes.array,
  activeId: PropTypes.string,
  unsaveIds: PropTypes.array,
  onTabClick: PropTypes.func,
  onTabClose: PropTypes.func,
}

TabList.defaultProps = {
  unsaveIds: []
}

export default TabList