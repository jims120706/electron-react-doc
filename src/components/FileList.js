import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types' // 校验器

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelate }) => {
	return (
		<ul className="list-group list-group-flush file-list">
			{
				files.map(file => {
					return (<li
						className="list-group-item bg-light row d-flex align-items-center file-item"
						key={file.id}
					>

						<FontAwesomeIcon icon={faMarkdown} size="lg" className="col-2" />
						<span className="col-8">{file.title}</span>
						<button type="button" className="icon-button col-1" onClick={() => {}}>
							<FontAwesomeIcon icon={faEdit} title="编辑" size="lg" />
						</button>
						<button type="button" className="icon-button col-1" onClick={() => {}}>
							<FontAwesomeIcon icon={faTrash} title="删除" size="lg" />
						</button>
					</li>)
				})
			}
		</ul>
	)
}

FileList.propTypes = {
	files: PropTypes.array,
}


FileList.defaultProps = {

}

export default FileList