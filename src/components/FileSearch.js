import React, { useState, useEffect, useRef } from 'react'

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
				<button type="button" className="btn btn-primary" onClick={() => { setInputActive(true) }}>搜索</button>
			</div>}
			{inputActive && <div className="row">
				<input className="form-control col-8" value={value} ref={node} onChange={(e) => { setValue(e.target.value) }} />
				<button type="button" className="btn btn-primary col-4" onClick={closeSearch}>关闭</button>
			</div>}
		</div>
	)
}

export default FileSearch