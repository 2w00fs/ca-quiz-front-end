import React, { useEffect, useRef, useState } from 'react'
import './style/Title.css'
import TextHighlight from '../TextHighlight/TextHighlight.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'

const Title = ({ initial, subheading, heading, inEditMode, setInEditMode, updateName, formLabel }) => {
    const [ value, setValue ] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
            inputRef.current.select()
        }
    }, [inputRef.current])

    useEffect(() => {
        setValue(initial)
    }, [initial])

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (value !== '') {
            updateName(value)
            setInEditMode(false)
        } else {
            setValue(initial)
            setInEditMode(false)
        }
    }

    return (
        <div className={'title'}>
            {!inEditMode ? (
                <>
                    <TextHighlight>
                        <h3>{subheading}</h3>
                    </TextHighlight>
                    <h1>{heading}</h1>
                </>
            ) : (
                <>
                    <h3>{formLabel}</h3>
                    <form onSubmit={submitHandler}>
                        <input ref={inputRef} type='text' value={value} onChange={onChangeHandler} onBlur={submitHandler} />
                    </form>
                </>
            )}
        </div>
    )
}

export default Title