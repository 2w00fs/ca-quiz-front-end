import React, { useEffect, useRef, useState } from 'react'
import './style/TextArea.css'

const TextArea = ({ value, onChange}) => {
    const textAreaRef = useRef(null)

    useEffect(() => {
        let padding = window.getComputedStyle(textAreaRef.current, null).getPropertyValue('padding-bottom')
        textAreaRef.current.style.height = "auto"
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
    }, [value])

    const onClick = event => {
        event.target.firstChild.focus()
    }

    const onFocusHandler = event => event.target.select()

    return (
        <div onClick={onClick} className='text-area-wrapper'>
            <textarea onFocus={onFocusHandler} className='text-area' ref={textAreaRef} value={value} onChange={onChange} rows="1" />
        </div>
    )
}

export default TextArea