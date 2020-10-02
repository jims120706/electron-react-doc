import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types' // 校验器
import useKeyPress from '../hooks/useKeyPress'

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelate }) => {
	const [editStatus, setEditStatus] = useState(false)
	const [value, setValue] = useState('')
	// 使用自定义hook
	const enterPressed = useKeyPress(13)
	const escPressed = useKeyPress(27)

	// 关闭搜索框
	const closeSearch = () => {
		setEditStatus(false)
		setValue('')
	}

	useEffect(() => {
		if (enterPressed && editStatus) {
			const editItem = files.find(item => item.id === editStatus)
			onSaveEdit(editItem.id, value)
			closeSearch()
		} else if (escPressed && editStatus) {
			closeSearch()
		}
	})

	return (
		<ul className="list-group list-group-flush file-list">
			{
				files.map(file => {
					return (<li
						className="list-group-item bg-light row d-flex align-items-center file-item"
						key={file.id}
					>
						{file.id !== editStatus &&
							<>
								<FontAwesomeIcon icon={faMarkdown} size="lg" className="col-2" />
								<span className="col-8 c-link" onClick={() => { onFileClick(file.id) }}>{file.title}</span>
								<button type="button" className="icon-button col-1" onClick={() => { setEditStatus(file.id); setValue(file.title) }}>
									<FontAwesomeIcon icon={faEdit} title="编辑" size="lg" />
								</button>
								<button type="button" className="icon-button col-1" onClick={() => { onFileDelate(file.id) }}>
									<FontAwesomeIcon icon={faTrash} title="删除" size="lg" />
								</button>
							</>
						}
						{file.id === editStatus &&
							<>
								<input className="form-control col-10" value={value} onChange={(e) => { setValue(e.target.value) }} />
								<button type="button" className="icon-button col-2" onClick={closeSearch}>
									<FontAwesomeIcon icon={faTimes} title="搜索" size="lg" />
								</button>
							</>
						}
					</li>)
				})
			}
		</ul>
	)
}

FileList.propTypes = {
	files: PropTypes.array,
	onFileClick: PropTypes.func,
	onSaveEdit: PropTypes.func,
	onFileDelate: PropTypes.func
}


FileList.defaultProps = {
	files: [],
	onFileClick: () => { },
	onSaveEdit: () => { },
	onFileDelate: () => { }
}

export default FileList