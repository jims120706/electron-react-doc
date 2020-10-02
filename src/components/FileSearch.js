import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types' // 校验器
import useKeyPress from '../hooks/useKeyPress'

const FileSearch = ({ title, onFileSearch }) => {
	const [inputActive, setInputActive] = useState(false)
	const [value, setValue] = useState('')
	// 使用自定义hook
	const enterPressed = useKeyPress(13)
	const escPressed = useKeyPress(27)

	// 关闭搜索框
	const closeSearch = () => {
		setInputActive(false)
		setValue('')
	}
	// input的ref
	let node = useRef(null)

	useEffect(() => {
		if(enterPressed && inputActive) {
			onFileSearch(value)
		}else if(escPressed && inputActive) {
			closeSearch()
		}
	})
	useEffect(() => {
		if (inputActive) {
			node.current.focus()
		}
	}, [inputActive])
	return (
		<div className="alert alert-primary">
			{!inputActive && <div className="d-flex justify-content-between align-items-center">
				<span>{title}</span>
				<button type="button" className="icon-button" onClick={() => { setInputActive(true) }}>
					<FontAwesomeIcon icon={faSearch} title="搜索" size="lg" />
				</button>
			</div>}
			{inputActive && <div className="d-flex justify-content-between align-items-center">
				<input className="form-control" value={value} ref={node} onChange={(e) => { setValue(e.target.value) }} />
				<button type="button" className="icon-button" onClick={closeSearch}>
					<FontAwesomeIcon icon={faTimes} title="搜索" size="lg" />
				</button>
			</div>}
		</div>
	)
}

// 校验器
FileSearch.propTypes = {
	title: PropTypes.string,
	onFileSearch: PropTypes.func.isRequired,
}

// 默认属性
FileSearch.defaultProps = {
	title: '我的云文档'
}

export default FileSearch