import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const FileSearch = ({ title, onFileSearch }) => {
	const [inputActive, setInputActive] = useState(false)
	const [value, setValue] = useState('')

	// 关闭搜索框
	const closeSearch = (e) => {
		e.preventDefault()
		setInputActive(false)
		setValue('')
	}
	// input的ref
	let node = useRef(null)

	useEffect(() => {
		const handleInputEvent = (event) => {
			const { keyCode } = event
			// 出现输入框并且按下键盘enter
			if (keyCode === 13 && inputActive) {
				onFileSearch(value)
			}
			// 出现输入框并且按下键盘esc
			else if (keyCode === 27 && inputActive) {
				closeSearch(event)
			}
		}
		document.addEventListener('keyup', handleInputEvent)
		return () => {
			document.removeEventListener('keyup', handleInputEvent)
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
					<FontAwesomeIcon icon={faSearch} title="搜索" size="lg"/>
				</button>
			</div>}
			{inputActive && <div className="d-flex justify-content-between align-items-center">
				<input className="form-control" value={value} ref={node} onChange={(e) => { setValue(e.target.value) }} />
				<button type="button" className="icon-button" onClick={closeSearch}>
					<FontAwesomeIcon icon={faTimes} title="搜索" size="lg"/>
				</button>
			</div>}
		</div>
	)
}

export default FileSearch