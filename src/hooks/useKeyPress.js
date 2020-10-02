/**
 * 自定义键盘按下的hook
 */

import React, { useState, useEffect, useRef } from 'react'

/**
 * 
 * @param {number} targetKeyCode 
 */
const useKeyPress = (targetKeyCode) => {
	// 是否按下按钮
	const [keyPressed, setKeyPressed] = useState(false)

	// 事件按下处理函数，直接解构出keyCode参数
	const keyDownHandler = ({ keyCode }) => {
		if (keyCode === targetKeyCode) {
			setKeyPressed(true)
		}
	}
	const keyUpHandler = ({ keyCode }) => {
		if (keyCode === targetKeyCode) {
			setKeyPressed(false)
		}
	}
	// 进入时注册，离开时注销事件
	useEffect(() => {
		document.addEventListener('keydown', keyDownHandler)
		document.addEventListener('keyup', keyUpHandler)
		return () => {
			document.removeEventListener('keydown', keyDownHandler)
			document.removeEventListener('keyup', keyUpHandler)
		}
	}, [])
	return keyPressed
}

export default useKeyPress