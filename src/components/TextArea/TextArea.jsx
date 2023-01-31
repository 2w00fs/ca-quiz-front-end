import React, { useEffect, useRef, useState } from 'react'
import './style/TextArea.css'

const TextArea = ({ value, onChange}) => {
    const textAreaRef = useRef(null)

    useEffect(() => {
        let padding = window.getComputedStyle(textAreaRef.current, null).getPropertyValue('padding-bottom')
        console.log(padding)
        // textAreaRef.current.style.paddingTop = '0rem'
        // textAreaRef.current.style.paddingTop = '0rem'
        textAreaRef.current.style.height = "auto"
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
        // textAreaRef.current.style.paddingBottom = '0.5rem'
        // textAreaRef.current.style.paddingTop = '0.5rem'
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